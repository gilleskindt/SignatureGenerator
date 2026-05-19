(function () {
  const BRAND_COLOR = "#111010";
  const FONT = "Arial, Helvetica, sans-serif";
  const HIGHSAIL_WEBSITE = "https://www.highsail.com/";
  const LOGO_FILE = "Highsail-Lockup-Mono-Positive@2x 1 (1).png";
  const LINKEDIN_ICON_FILE = "linkedin-icon.png";
  const CALENDAR_ICON_EMBEDDED = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAG5ElEQVR4nO3ajXHa2AKG4e9UEG0FiysIqSBHFRhXEFFBcAWLKzBbwYoKjCvYQwXGFQRXcOUKfF+NopVjgdAfCBG9M88wY3sc4AOJkWM01GnDAB03DNBxwwAdNwzQccMAHTcM0HHDAB3XpwHG+BPxbVEbvCC+PfsMzrGRpK+YYIyR6rVVMsQKa2x1ZhmcS2N8wwQjHaetkjGW2KDzDLrMQ/ykzzDSadtKWmCJCJ1k0EUevmMGD10WYYG/EeGkdTHAX5jBwzkVYYE7nCyDU2Ul/YORzrutpCmcTpDBsfMQP/ET9KlQ0i0iHK1jDzDGA0bqZxtMEd8eJYNjFSh55V9CU4Q6QgbH6C/MdVnN8Dda7RgD/INAl1mo5N3QWgZtdslPflqoFkcwaKvf4clPiw9F8SGpcW0NECgZoK3iBxhhgs9o0jNW8PAdbTVFqIYZNM1K+hdtdYe5kuInbSvpE+r0ipGSMePmSj4gtJUPpwYZNMnDD8S3beXDKcspuTRdpzWssqzafbFEuEJ8WyuDJsUPxqrdfDhlOZ3vAHFOyX2ulUHdZrhH2/lwynI67wHibrFA5QzqNJL0BA9le4bV7rfrG9J8OGU5ZQPcYa7i5sqO82tYZVn9OoDBxzw4VTv5R7hCfFspgzo9YIIq3WCFXb0hzYdTltNpB4ibIH6MVVohfoyV2ncHirL69UGUzYfT7iJ8QtwUobJ+YKSkWyxQVKDsI/FWySszLVD2vVd42JVV+49xZwZVi++YVfV8OO1uhWvERQiU3QbK+oINihrjCWmhEh5CJbdxj5hgV1bJ46yaU/I4S2dQJat6dyzOh9Pu4ifiAUU9Y4wyOWWHrX3dYIVdWR3nceYyqFJ8h69RJx9O+wuV/IF+V6+wOvzqTxsp+dlP2NUSgfZnVX+AR0xQKoOyjZQcj+vmw6m4uZKPt++fuDXir21QJQ8LfEPaC+KvxYqyqj9A3BW2KpFB2Wa4R918OJXLKmmrRNOskt+zVbmsmg1wiwUOZlC2Hxipfj6c+pFVswE2+IKDGZRpjCc0KVT5V2DXjVR8jihTPMAGhRmUaYZ7DJXvFgsUVnaAFa4xVL5HTFBY2QHeMFStCH+gsDIDWDU7IaUtsVU/GunXj691+4IN9mZwqEDZ9ZMm+XDqR1btvOimCFWQwaHmyq4uNsmHUz+yameAO8xVkMGhVmjjBOzDqR9ZtTPAIybYm8GhnA5f2CqTD6d8C3zG+26xQdq/+Fj8+9LGuMf7njFDWqD8cX2JUPmsdv+bVVvDqiCDQz1hjKb5cMrnlB/448++4WMGaVb5J2wNq6y58ofSO8yVzyr/++q0hlVBBod6Qxv5cMrndLkDxBnsrfCbP3tDG/lwyuc0DFDYG9rIh1M+p2GAwt7QRj6c8sXnFw/v2yBCmlU+pywPY7wvwgZpIyXet1XiY1a/0QDnmFU7A7zCw94MDuWUP0TUyYdTP7JqZ4A1rAoyOJTTMEDd1rAqyOBQK1yjaT6c8jnlB/74s2/4mEGaVf4JW8Mqa67Tn4SXCFSQwaHmyt/xOvlwyud0uQPs+/3/ZXCoCR7QNB9O+Zwud4AbrLA3g0ON8YSm+XDK53S5A3zBBnszKFOET2iSD6d8Tpc5wCs8FGZQphWu0SQfTv3IqvkAj5igMIMyzXCPJvlw6kdWzQeYItSBDMo0UvIfs5rkw6kfWTUf4ApbHcigbBt8Rt18OPUjq2YDrGFVIoOyBWr2x3kfTvmcLu8kPEWoEhmUzcP/UDcfTvmcLm+APxDhYAZVCpX/u2rZfDjlc7qsAZYIVDKDKo1U/2Tswymf02UNcIWtSmZQtVD13gU+nPItMMb7ZtggzSmfVdYYC7xvgxnSAiXeFyrxMat6AywRqEIGVRup3rvAh1M/sqo3wBW2qpBBnRb4jir5cOpHVtUHuMNcFTOok4etql0f8uHUj6yqDfCCMSJUyqBuEzygbHeYqx8t8B1lu8EKlTNoUqhqJ+T4Tm5wzo0xQdmWCFQzgyZ5cGp2iaLPPcOqxqEnrekAcWM4VTsfXEKvsGr4jm5jgLhAza4T9bEbrNCotgaIC/T7jDBFqBYyaLNAlz/CFKFayqDtAl3uCFOEajGDYxTo8kaYIlTLGRyrMZz6/+noFVYNP+3s65gDxHlY4Sv62BoTRDhKBqdorvy1+HPvDnMdOYNTNVJyDP2Kc26NQMnFxqNncOomWOBPnFMvmGGFk2XQVYGSt3jXQ7xgruTdefIMum7y0zecsiVCJZ/UOsvgXPIw+ekax+gRq58idN45DfAxq4yHz6jSMyI4Zc6ucx5gV2N4SBsjboO0CBv0or4NcHENA3TcMEDHDQN03DBAxw0DdNwwQMf9H7VzyXCXg65bAAAAAElFTkSuQmCC";
  const GITHUB_ICON_EMBEDDED = "data:image/png;base64,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";
  const TABLE_WIDTH = 520;

  const fields = {
    name: document.getElementById("name"),
    title: document.getElementById("title"),
    phone: document.getElementById("phone"),
    email: document.getElementById("email"),
    linkedinUrl: document.getElementById("linkedinUrl"),
    githubUrl: document.getElementById("githubUrl"),
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

  function githubIconSrc() {
    return GITHUB_ICON_EMBEDDED;
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
    const github = fields.githubUrl.value.trim();
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
    if (meeting) {
      socialCells.push(
        `<td style="padding: 0 8px 0 0; vertical-align: middle;">
          <a href="${escapeHtml(normalizeUrl(meeting))}" style="text-decoration: none; line-height: 0;">
            <img src="${escapeHtml(calendarIconSrc())}" alt="Book a meeting" width="24" height="24"
              style="display: block; border: 0; width: 29px; height: 29px;">
          </a>
        </td>`
      );
    }
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
    if (github) {
      socialCells.push(
        `<td style="padding: 0; vertical-align: middle;">
          <a href="${escapeHtml(normalizeUrl(github))}" style="text-decoration: none; line-height: 0;">
            <img src="${escapeHtml(githubIconSrc())}" alt="GitHub" width="24" height="24"
              style="display: block; border: 0; width: 24px; height: 24px;">
          </a>
        </td>`
      );
    }
    if (socialCells.length) {
      const last = socialCells.length - 1;
      socialCells[last] = socialCells[last].replace("padding: 0 8px 0 0", "padding: 0");
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

    const hasContact = Boolean(phone || email || linkedin || github || meeting);
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
