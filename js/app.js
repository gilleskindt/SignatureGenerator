(function () {
  const BRAND_COLOR = "#111010";
  const FONT = "Arial, Helvetica, sans-serif";
  const HIGHSAIL_WEBSITE = "https://www.highsail.com/";
  const LOGO_FILE = "Highsail-Lockup-Mono-Positive@2x 1 (1).png";
  const LINKEDIN_ICON_FILE = "linkedin-icon.png";
  const CALENDAR_ICON_EMBEDDED = "data:image/png;base64,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";
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

  function calendarIconSrc() {
    return CALENDAR_ICON_EMBEDDED;
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

  /** Vertical spacing between stacked rows (email-safe). */
  function rowPadding(index, total) {
    if (total <= 1 || index >= total - 1) return "padding: 0;";
    const gapAfter = index === 0 ? 0 : 8;
    return `padding: 0 0 ${gapAfter}px 0;`;
  }

  function buildSignatureHtml() {
    const name = fields.name.value.trim();
    const title = fields.title.value.trim();
    const phone = fields.phone.value.trim();
    const email = fields.email.value.trim();
    const linkedin = fields.linkedinUrl.value.trim();
    const meeting = fields.meetingUrl.value.trim();

    const nameParts = name.split(/\s+/).filter(Boolean);
    const nameHtml = nameParts.map((p) => `<span>${escapeHtml(p)}</span>`).join("<span>&nbsp;</span>");

    const nameCell = name
      ? `<span style="font-size: 16px; line-height: 22px; font-family: ${FONT}; color: ${BRAND_COLOR}; font-weight: bold;">${nameHtml}</span>`
      : "";
    const titleCell = title
      ? `<span style="font-size: 14px; line-height: 14px; font-family: ${FONT}; color: ${BRAND_COLOR};">${escapeHtml(title)}</span>`
      : "";
    const logoCell = `<a href="${HIGHSAIL_WEBSITE}" style="text-decoration: none;">
          <img src="${escapeHtml(logoSrc())}" alt="Highsail" width="120" height="35"
            style="display: block; border: 0; width: 120px; max-width: 120px; height: auto;">
        </a>`;
    const phoneCell = phone
      ? `<a href="${escapeHtml(telHref(phone))}" style="${linkStyle()}">${escapeHtml(phone)}</a>`
      : "";
    const emailCell = email
      ? `<a href="mailto:${escapeHtml(email)}" style="${linkStyle()}">${escapeHtml(email)}</a>`
      : "";

    const socialCells = [];
    if (linkedin) {
      socialCells.push(
        `<td style="padding: 0 8px 0 0; vertical-align: middle;">
          <a href="${escapeHtml(normalizeUrl(linkedin))}" style="text-decoration: none; line-height: 0;">
            <img src="${escapeHtml(linkedinIconSrc())}" alt="LinkedIn" width="24" height="24"
              style="display: block; border: 0; width: 24px; height: 24px;">
          </a>
        </td>`
      );
    }
    if (meeting) {
      socialCells.push(
        `<td style="padding: 0; vertical-align: middle;">
          <a href="${escapeHtml(normalizeUrl(meeting))}" style="text-decoration: none; line-height: 0;">
            <img src="${escapeHtml(calendarIconSrc())}" alt="Book a meeting" width="24" height="24"
              style="display: block; border: 0; width: 29px; height: 29px;">
          </a>
        </td>`
      );
    }
    const socialCell = socialCells.length
      ? `<table cellpadding="0" cellspacing="0" border="0"><tbody><tr>${socialCells.join("")}</tr></tbody></table>`
      : "";

    const pairs = [];
    function addPair(left, right) {
      if (left || right) {
        pairs.push({
          left: left || "&nbsp;",
          right: right || "&nbsp;",
        });
      }
    }

    addPair(nameCell, phoneCell);
    addPair(titleCell, emailCell);
    addPair(logoCell, socialCell);

    const hasContact = Boolean(phone || email || linkedin || meeting);
    const rowCount = pairs.length;

    if (rowCount === 0) {
      return `<table cellpadding="0" cellspacing="0" border="0" width="${TABLE_WIDTH}" style="border-collapse: collapse; font-family: ${FONT}; color: ${BRAND_COLOR};"><tbody><tr><td>&nbsp;</td></tr></tbody></table>`;
    }

    const profileCell =
      profilePicDataUrl &&
      `<td rowspan="${rowCount}" width="72" style="vertical-align: middle; padding: 0 14px 0 0;">
        <img src="${profilePicDataUrl}" alt="" width="64" height="64"
          style="width: 64px; height: 64px; border-radius: 32px; display: block; border: 0;">
      </td>`;

    const dividerCell = `<td rowspan="${rowCount}" width="1" bgcolor="${BRAND_COLOR}"
      style="background-color: ${BRAND_COLOR}; width: 1px; font-size: 0; line-height: 0;">&nbsp;</td>`;

    let bodyRows = "";
    for (let i = 0; i < rowCount; i++) {
      const pad = rowPadding(i, rowCount);
      const contactCols = hasContact
        ? `<td width="14" style="font-size: 0; line-height: 0;">&nbsp;</td>
           ${i === 0 ? dividerCell : ""}
           <td width="14" style="font-size: 0; line-height: 0;">&nbsp;</td>
           <td style="vertical-align: middle; ${pad} white-space: nowrap; font-family: ${FONT};">${pairs[i].right}</td>`
        : "";

      bodyRows += `<tr>
        ${i === 0 ? profileCell || "" : ""}
        <td style="vertical-align: middle; ${pad} white-space: nowrap; font-family: ${FONT}; color: ${BRAND_COLOR};">${pairs[i].left}</td>
        ${contactCols}
      </tr>`;
    }

    return `<table cellpadding="0" cellspacing="0" border="0" width="${TABLE_WIDTH}" style="border-collapse: collapse; font-family: ${FONT}; color: ${BRAND_COLOR};">
      <tbody>
        <tr>
          <td style="padding: 0;">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; font-family: ${FONT};">
              <tbody>${bodyRows}</tbody>
            </table>
          </td>
        </tr>
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
  copyButton.addEventListener("click", copySignature);

  loadEmbeddedAssets();
})();
