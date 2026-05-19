(function () {
  const BRAND_COLOR = "#111010";
  const FONT = "Arial, Helvetica, sans-serif";
  const HIGHSAIL_WEBSITE = "https://www.highsail.com/";
  const ORGANIZATION = "Highsail";
  const LOGO_FILE = "Highsail-Lockup-Mono-Positive@2x 1 (1).png";
  const LINKEDIN_ICON_FILE = "linkedin-icon.png";
  const TABLE_WIDTH = 520;

  const fields = {
    name: document.getElementById("name"),
    title: document.getElementById("title"),
    phone: document.getElementById("phone"),
    email: document.getElementById("email"),
    linkedinUrl: document.getElementById("linkedinUrl"),
    meetingUrl: document.getElementById("meetingUrl"),
  };

  const preview = document.getElementById("signature-preview");
  const copyButton = document.getElementById("copy-button");
  const toast = document.getElementById("toast");
  const profilePicInput = document.getElementById("profile-pic-input");
  const choosePictureBtn = document.getElementById("choose-picture");

  let profilePicDataUrl = "";
  let logoDataUrl = "";
  let linkedinIconDataUrl = "";

  function getStyle() {
    const selected = document.querySelector('input[name="signatureStyle"]:checked');
    return selected ? selected.value : "branded";
  }

  function assetUrl(filename) {
    const path = window.location.pathname.replace(/\/[^/]*$/, "/");
    return window.location.origin + path + "assets/" + encodeURIComponent(filename);
  }

  function logoSrc() {
    return logoDataUrl || assetUrl(LOGO_FILE);
  }

  function linkedinIconSrc() {
    return linkedinIconDataUrl || assetUrl(LINKEDIN_ICON_FILE);
  }

  async function loadAssetAsDataUrl(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to load " + url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  async function loadEmbeddedAssets() {
    const tasks = [];

    if (!logoDataUrl) {
      tasks.push(
        loadAssetAsDataUrl(assetUrl(LOGO_FILE))
          .then((dataUrl) => {
            logoDataUrl = dataUrl;
          })
          .catch(() => {})
      );
    }

    if (!linkedinIconDataUrl) {
      tasks.push(
        loadAssetAsDataUrl(assetUrl(LINKEDIN_ICON_FILE))
          .then((dataUrl) => {
            linkedinIconDataUrl = dataUrl;
          })
          .catch(() => {})
      );
    }

    await Promise.all(tasks);
    updatePreview();
  }

  function normalizeUrl(url) {
    if (!url) return "";
    return url.startsWith("http") ? url : "https://" + url;
  }

  function telHref(phone) {
    return "tel:" + phone.replace(/\s/g, "");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function linkStyle() {
    return `color: ${BRAND_COLOR}; font-size: 12px; font-family: ${FONT}; text-decoration: none; white-space: nowrap;`;
  }

  function buildSignatureHtml() {
    const name = fields.name.value.trim();
    const title = fields.title.value.trim();
    const phone = fields.phone.value.trim();
    const email = fields.email.value.trim();
    const linkedin = fields.linkedinUrl.value.trim();
    const meeting = fields.meetingUrl.value.trim();
    const branded = getStyle() === "branded";

    const nameParts = name.split(/\s+/).filter(Boolean);
    const nameHtml = nameParts.map((p) => `<span>${escapeHtml(p)}</span>`).join("<span>&nbsp;</span>");

    let contactRows = "";
    if (phone) {
      contactRows += `<tr><td style="padding: 0 0 2px 0; white-space: nowrap;"><a href="${escapeHtml(telHref(phone))}" style="${linkStyle()}">${escapeHtml(phone)}</a></td></tr>`;
    }
    if (email) {
      contactRows += `<tr><td style="padding: 0 0 2px 0; white-space: nowrap;"><a href="mailto:${escapeHtml(email)}" style="${linkStyle()}">${escapeHtml(email)}</a></td></tr>`;
    }
    if (meeting) {
      contactRows += `<tr><td style="padding: 0; white-space: nowrap;"><a href="${escapeHtml(normalizeUrl(meeting))}" style="${linkStyle()}">Book a meeting</a></td></tr>`;
    }

    const profileCell = profilePicDataUrl
      ? `<td width="72" style="vertical-align: middle; padding: 0 14px 0 0;">
          <img src="${profilePicDataUrl}" alt="" width="64" height="64"
            style="width: 64px; height: 64px; border-radius: 32px; display: block; border: 0;">
        </td>`
      : "";

    const titleRow = title
      ? `<tr>
          <td style="padding: 0; font-size: 14px; line-height: 20px; font-family: ${FONT}; color: ${BRAND_COLOR};">
            ${escapeHtml(title)}
          </td>
        </tr>`
      : "";

    const orgRow = `<tr>
          <td style="padding: 0; font-size: 13px; line-height: 18px; font-family: ${FONT}; color: ${BRAND_COLOR}; opacity: ${branded ? "0.6" : "0.75"};">
            ${escapeHtml(ORGANIZATION)}
          </td>
        </tr>`;

    const contactSection = contactRows
      ? `<td width="14" style="font-size: 0; line-height: 0;">&nbsp;</td>
         <td width="1" style="background-color: ${BRAND_COLOR}; font-size: 0; line-height: 0;">&nbsp;</td>
         <td width="14" style="font-size: 0; line-height: 0;">&nbsp;</td>
         <td style="vertical-align: middle; padding: 0; white-space: nowrap;">
           <table cellpadding="0" cellspacing="0" border="0" style="font-family: ${FONT};">
             <tbody>${contactRows}</tbody>
           </table>
         </td>`
      : "";

    let footerRow = "";
    if (branded) {
      const social = linkedin
        ? `<a href="${escapeHtml(linkedin)}" style="text-decoration: none; line-height: 0;">
             <img src="${escapeHtml(linkedinIconSrc())}" alt="LinkedIn" width="24" height="24"
               style="display: block; border: 0; width: 24px; height: 24px;">
           </a>`
        : "&nbsp;";

      footerRow = `
        <tr><td colspan="1" height="14" style="font-size: 0; line-height: 0;">&nbsp;</td></tr>
        <tr>
          <td style="width: 100%; height: 1px; background-color: ${BRAND_COLOR}; font-size: 0; line-height: 0;">&nbsp;</td>
        </tr>
        <tr><td height="10" style="font-size: 0; line-height: 0;">&nbsp;</td></tr>
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: ${FONT};">
              <tbody>
                <tr>
                  <td style="vertical-align: middle; padding: 0;">
                    <a href="${HIGHSAIL_WEBSITE}" style="text-decoration: none;">
                      <img src="${escapeHtml(logoSrc())}" alt="Highsail" width="120" height="35"
                        style="display: block; border: 0; width: 120px; max-width: 120px; height: auto;">
                    </a>
                  </td>
                  <td style="vertical-align: middle; text-align: right; padding: 0; width: 40px;">
                    ${social}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>`;
    }

    return `<table cellpadding="0" cellspacing="0" border="0" width="${TABLE_WIDTH}" style="border-collapse: collapse; font-family: ${FONT}; color: ${BRAND_COLOR};">
      <tbody>
        <tr>
          <td style="padding: 0;">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; font-family: ${FONT};">
              <tbody>
                <tr>
                  ${profileCell}
                  <td style="vertical-align: middle; padding: 0;">
                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; font-family: ${FONT};">
                      <tbody>
                        <tr>
                          <td style="padding: 0 0 2px 0; font-size: 16px; line-height: 22px; font-family: ${FONT}; color: ${BRAND_COLOR}; font-weight: bold;">
                            ${nameHtml}
                          </td>
                        </tr>
                        ${titleRow}
                        ${orgRow}
                      </tbody>
                    </table>
                  </td>
                  ${contactSection}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        ${footerRow}
      </tbody>
    </table>`;
  }

  function updatePreview() {
    preview.innerHTML = buildSignatureHtml();
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function showCopySuccess() {
    showToast("Signature copied — paste into your email signature settings.");
    copyButton.classList.add("copied");
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.classList.remove("copied");
      copyButton.textContent = "Copy Signature";
    }, 2000);
  }

  function copyRichHtml(html, plain) {
    const wrappedHtml = `<html><head><meta charset="utf-8"></head><body><!--StartFragment-->${html}<!--EndFragment--></body></html>`;

    const onCopy = (event) => {
      event.clipboardData.setData("text/html", wrappedHtml);
      event.clipboardData.setData("text/plain", plain);
      event.preventDefault();
    };

    document.addEventListener("copy", onCopy, { once: true });

    const host = document.createElement("div");
    host.setAttribute("contenteditable", "true");
    host.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0;";
    host.innerHTML = html;
    document.body.appendChild(host);

    const range = document.createRange();
    range.selectNodeContents(host);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }

    selection.removeAllRanges();
    document.body.removeChild(host);
    return copied;
  }

  async function copyWithClipboardApi(html, plain) {
    if (!navigator.clipboard?.write) return false;

    const wrappedHtml = `<html><body><!--StartFragment-->${html}<!--EndFragment--></body></html>`;
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/html": Promise.resolve(new Blob([wrappedHtml], { type: "text/html" })),
        "text/plain": Promise.resolve(new Blob([plain], { type: "text/plain" })),
      }),
    ]);
    return true;
  }

  async function copySignature() {
    await loadEmbeddedAssets();

    const html = buildSignatureHtml();
    const plain = preview.innerText || "";

    if (copyRichHtml(html, plain)) {
      showCopySuccess();
      return;
    }

    try {
      if (await copyWithClipboardApi(html, plain)) {
        showCopySuccess();
        return;
      }
    } catch {
      /* fall through */
    }

    showToast("Copy failed — open via http://localhost (not file://) and try again.");
  }

  choosePictureBtn.addEventListener("click", () => profilePicInput.click());

  profilePicInput.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      profilePicDataUrl = reader.result;
      updatePreview();
    };
    reader.readAsDataURL(file);
  });

  Object.values(fields).forEach((el) => el.addEventListener("input", updatePreview));
  document.querySelectorAll('input[name="signatureStyle"]').forEach((el) => {
    el.addEventListener("change", updatePreview);
  });
  copyButton.addEventListener("click", copySignature);

  loadEmbeddedAssets();
})();
