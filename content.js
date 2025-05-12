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
  
  // Run immediately on page load
  // resizeElement();

  // Observe dynamic changes (if the element loads later)
  const observer = new MutationObserver(() => {
    resizeElement();
    resizeContent();
  });

  observer.observe(document.body, { childList: true, subtree: true });  