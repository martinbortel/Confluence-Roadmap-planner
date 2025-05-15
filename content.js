function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function resizeElement() {
    let element = document.querySelector('section#confluence-roadmap-dialog[data-aui-modal="true"]');
    
    if (element) {
      // elemenent_width = "1520px";
      elemenent_width = "99%";
      element.style.width = elemenent_width;
      // element_minHeight = "820px";
      element_minHeight = "99%";
      // element_minHeight = "97%";
      element.style.minHeight = element_minHeight;
      // element.style.padding = "0";
      element.style.marginTop = "-92px";
      console.log("Confluence Roadmap Dialog: Modal resized to " + elemenent_width + "/" + element_minHeight + "!");
    }
  }

async function resizeContent() {
    let element = document.querySelector('section#confluence-roadmap-dialog[data-aui-modal="true"]');
    let content_div = document.getElementById("confluence-roadmap-dialog--panel");
    
    if (content_div) {
      // content_div.style.minHeight = "680px";
      // div_height = height + 70;
      await sleep(200);
      const height = element.offsetHeight;
      div_height = height - 120;
      content_div.style.minHeight = div_height + "px";
      console.log("Confluence Roadmap Dialog: Content div resized to minHeight: " + div_height + "px !");
    }
  }
  

// 🔶 Add Quarter Labels Based on Week Dates
function labelQuarters() {
  const dateElements = document.querySelectorAll('.roadmap-column-title');
  const quarters = {
    Q1: [0, 1, 2],   // Jan, Feb, Mar
    Q2: [3, 4, 5],   // Apr, May, Jun
    Q3: [6, 7, 8],   // Jul, Aug, Sep
    Q4: [9, 10, 11], // Oct, Nov, Dec
  };

  const monthMap = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3,
    'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7,
    'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11,
  };

  const getQuarter = (month) => {
    for (const [q, months] of Object.entries(quarters)) {
      if (months.includes(month)) return q;
    }
    return '';
  };

  dateElements.forEach(el => {
    const text = el.textContent.trim();
    const match = text.match(/^(\d{1,2})-(\w{3})$/);
    if (match) {
      const day = parseInt(match[1], 10);
      const monthStr = match[2];
      const month = monthMap[monthStr];
      if (month !== undefined) {
        const quarter = getQuarter(month);
        // Only add if not already labeled
        if (!el.textContent.includes(`(${quarter})`)) {
          el.textContent = `${text} (${quarter})`;
        }
      }
    }
  });
}

  // Run immediately on page load
  // resizeElement();

  // Observe dynamic changes (if the element loads later)
  const observer = new MutationObserver(() => {
    resizeElement();
    resizeContent();
    labelQuarters();
  });

  observer.observe(document.body, { childList: true, subtree: true });  