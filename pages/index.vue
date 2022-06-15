<template>
  <div class="page">
    <a href="#ak-container" title="跳至主要內容" id="ak-jump">跳至主要內容</a>
    <a href="#ak-header" title="menu group" id="ak-header" accesskey="U" name="ak-header">:::</a>
    <div class="page-header">
      <h1><nuxt-link to="/" title="Home page">Piman</nuxt-link></h1>
      <nav aria-label="Piman" class="menu">
        <bpa-dropdown
          v-model="menuValue"
          :options="menuOptions"
          placeholder="選單"
        />
      </nav>
    </div>
    <div class="page-container">
      <a href="#ak-container" title="主要內容" id="ak-container" accesskey="C" name="ak-container">:::</a>
      <article>
        <section class="hero" id="hero">
          <div class="deco-piman">
            <!-- <img src="/images/piman-red.svg" alt="" class="deco-piman-red" loading="lazy">
            <img src="/images/piman-yellow.svg" alt="" class="deco-piman-yellow" loading="lazy"> -->
            <img src="/images/piman-green.svg" alt="" class="deco-piman-green" loading="lazy">
          </div>
          <h2>Piman</h2>
          <p>一款聚焦於無障礙的開源 UI 框架。</p>
          <div style="margin-bottom: 7.5rem;">
            <nuxt-link class="bpa-btn bpa-btn--primary" to="https://piman.notion.site/How-to-Use-e14a8f80aa3d40859f16916bbd16aa9b" title="Getting Start Piman">快速開始</nuxt-link>
            <nuxt-link class="bpa-btn" to="https://github.com/ya-sai/piman" title="go to Github">Github</nuxt-link>
          </div>
          <bpa-button class="bpa-btn--circle" style="display: flex;margin: 0 auto 0.5rem; align-items: center; justify-content: center;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Scroll Down Icon</title>
              <path d="M7.48182 11.8312L1.54795 5.89727C1.26177 5.61108 1.26177 5.1471 1.54795 4.86095L2.24004 4.16886C2.52574 3.88316 2.98877 3.88261 3.27514 4.16763L8 8.87035L12.7248 4.16763C13.0112 3.88261 13.4742 3.88316 13.7599 4.16886L14.452 4.86095C14.7382 5.14713 14.7382 5.61111 14.452 5.89727L8.51817 11.8312C8.23198 12.1173 7.76801 12.1173 7.48182 11.8312Z" fill="#222222"/>
            </svg>
            <span class="visually-hidden">Scroll Down</span>
          </bpa-button>
          往下捲動
        </section>
        <section class="intro" id="intro">
          <div class="deco-piman">
            <img src="/images/piman-red.svg" alt="" class="deco-piman-red" loading="lazy">
            <img src="/images/piman-yellow.svg" alt="" class="deco-piman-yellow" loading="lazy">
            <img src="/images/piman-green.svg" alt="" class="deco-piman-green" loading="lazy">
          </div>
          <div class="intro-title">
            <div>Accessibility</div><div>Design System</div><div>UI Freamework</div>
          </div>
          <p>
            👉 近年來「以使用者為中心」的概念已深植人心，
            而這股力量也開始擴散至無障礙網頁設計領域，
            藉由不斷改善網頁的親和力，
            期望能達成通用設計的核心概念：Design for All。
          </p>
          <p>
            👉 Piman 正是為此而生，
            從人們日常生活常頻繁接觸的網頁開始著手改善，
            所以首要任務便是推廣開發者使用  Piman 開發政府機關網站，
            進而應用在產品、官網等地方，如此企業可善盡社會責任，也可與國際趨勢接軌。
          </p>
        </section>
        <section class="reasons" id="reasons">
          <div class="reasons__box">
            <div class="reasons-left">
              <div class="reasons-title">
                應該使用符合無障礙網頁設計 UI 框架的其中 7 個理由<br>
                <!-- 7 reasons to use Piman for projects / products<br> -->
                💪💪💪
              </div>
            </div>
            <div class="reasons-right">
              <ul class="reasons-list">
                <li>
                  <div>不可能要求所有參與人員都學習無障礙網頁設計規範</div>
                  <div>我們鼓勵越多人認識越好，但這是不切實際的。使用 Piman 就省下很多人的力氣與成本。</div>
                </li>
                <li>
                  <div>每次都要處理很多額外的東西</div>
                  <div>例如：可點擊的地方無法使用鍵盤操作。</div>
                </li>
                <li>
                  <div>使用的前端框架不符合無障礙網頁設計規範</div>
                  <div>可能必須修改原始碼，造成鎖死版本問題，亦或是額外使用暴力法...。</div>
                </li>
                <li>
                  <div>每次機器掃描後心都很累（臺灣 NCC freego 軟體）</div>
                  <div>團隊內如果沒有人特別學習，就會出現改得很煩、不知道解法、團隊氣氛糟糟的情況。</div>
                </li>
                <li>
                  <div>很大機率被退件 （臺灣 NCC 人工審核）</div>
                  <div>增加專案被罰錢的風險（ 最好能談成維運時再通過無障礙標章，也比較合理 ）。</div>
                </li>
                <li>
                  <div>沒有認真研究的話，有需要的人會感到困擾</div>
                  <div>原本是好意，結果使用起來變得更困擾。</div>
                </li>
                <li>
                  <div>公司都應該需要一套 Design System</div>
                  <div>既然如此，那何不順便讓網頁親和力變得更高呢！</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="demo" id="demo">
          <div class="demo-left">
            <div class="demo-title">基於 Vue 2 設計</div>
            <ul>
              <li>因為無障礙網頁設計有許多規範，所以Piman 使用前端框架 Vue 製作各種元件，讓開發者可以專注在優先度更高的事情上，不需因為無障礙網頁設計而煩惱。</li>
              <li>選擇了 Vue 也相對其他框架好入門。</li>
              <li>為了良好的支援 IE11 ，選擇了 Vue 2。</li>
            </ul>
            <div class="cta">
              <div>Try Piman</div>
              <div> ➡ ➡ ➡</div>
            </div>
          </div>
          <div class="demo-right">
            <iframe src="https://codesandbox.io/embed/piman-form-klm4on?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
              style="width:100%; height:100%; border:0; border-radius: 4px; overflow:hidden;"
              title="Piman-Form"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </section>
        <section class="faq" id="faq">
          <div class="faq__box">
            <div class="faq-left">
              <div class="faq-title">FAQ</div>
            </div>
            <div class="faq-right">
              <bpa-accordion>
                <bpa-accordion-item title="使用 Piman 之前，需要先了解甚麼知識嗎？">
                  <ul>
                    <li><p>您必須熟讀 <a href="https://www.w3schools.com/html/" title="另開視窗前往 w3schools 查看 Html" target="_blank" rel="noreferrer noopener">HTML 字典</a> 與  <a href="https://www.w3schools.com/css/" title="另開視窗前往 w3schools 查看 CSS" target="_blank" rel="noreferrer noopener">CSS</a> 字典</p></li>
                    <li><p>推薦至<a href="https://accessibility.ncc.gov.tw/" title="另開視窗前往無障礙網路空間服務網" target="_blank" rel="noreferrer noopener">無障礙網路空間服務網</a>熟讀各項無障礙網頁設計規範</p></li>
                    <li><p>您需要了解 WAI-ARIA 並謹記 WAI-ARIA 的宗旨為：<a href="https://www.w3.org/WAI/ARIA/apg/patterns/" title="另開視窗前往 w3schools 學習 WAI-ARIA" target="_blank" rel="noreferrer noopener">No ARIA is better than Bad ARIA</a>，這也意味著熟讀 HTML 字典與 CSS 字典。大概先暸解這三個，之後可以再慢慢擴充相關知識。</p></li>
                  </ul>
                </bpa-accordion-item>
                <bpa-accordion-item title="當我用了 Piman，我的網站就會符合無障礙網頁規範了嗎？">
                  <p>
                    很可惜，我們也很想，但因為每個網站的目標與內容都不相同，排版也不會一樣，<br>
                    所以您還是需要擁有無障礙網頁設計規範的知識來製作網站，<br>
                    Piman 目前提供 <a href="https://www.figma.com/community/file/1107940884755373211" title="另開視窗前往 Figma Piman 設計稿" target="_blank" rel="noreferrer noopener">Figma 設計稿</a> 、 <a href="https://github.com/ya-sai/piman" title="另開視窗前往 Piman Github" target="_blank" rel="noreferrer noopener">Vue 元件</a>以及 <a href="https://github.com/ya-sai/paprika" title="另開視窗前往 Nuxt 簡易模板" target="_blank" rel="noreferrer noopener">Nuxt 的 簡易模板</a>。<br>
                  </p>
                </bpa-accordion-item>
                <bpa-accordion-item title="瀏覽器支援程度如何呢？">
                  現代主流瀏覽器與 IE11+
                </bpa-accordion-item>
                <bpa-accordion-item title="我還是不太滿意 Piman，有沒有推薦符合無障礙設計規範的 UI 框架？">
                  <p>當然有，只要您想要設計無障礙網頁，我們很樂意提供您除了 Piman 之外的資訊。</p>

                  <p>
                    目前主流 UI 框架應該都有符合無障礙網頁設計規範，例如 <a href="https://getbootstrap.com/" title="另開視窗前往 Bootstrap" target="_blank" rel="noreferrer noopener">Bootstrap</a>，而我們私心推薦的是 <a href="https://carbondesignsystem.com/" title="另開視窗前往 IBM 的 Carbon" target="_blank" rel="noreferrer noopener">IBM 的 Carbon</a>，因爲它包含了三大前端框架，且有完整的 demo 和 文件。
                    或是可以選擇類似例如：<a href="https://headlessui.dev/" title="另開視窗前往 headlessui" target="_blank" rel="noreferrer noopener">https://headlessui.dev/</a>  跟 <a href="https://www.radix-ui.com/" title="另開視窗前往 radix-ui" target="_blank" rel="noreferrer noopener">https://www.radix-ui.com/</a> 等 headless，這些專注在行為上，UI 風格則是自己額外建立。
                  </p>

                  <p>
                    只不過有一點您可能要注意的是，因為 Piman 是有對臺灣 NCC 規範特別關注，再加上臺灣政府單位大多數仍有 IE11 的需求，
                    所以以上框架您可能需要自行將程式碼轉成 IE11 以及可能會碰到臺灣 NCC freego 機器掃描和人工檢核的問題。
                  </p>
                </bpa-accordion-item>
              </bpa-accordion>
            </div>
          </div>
        </section>
        <section class="resources" id="resources">
          <div class="resources__box">
            <div class="resources-title">
              <img src="images/resources-bg.svg" alt="">
              Resources
            </div>
            <ul class="resources-list">
              <li>
                <a href="https://www.figma.com/community/file/1107940884755373211" title="另開視窗前往 piman figma community" target="_blank" rel="noreferrer noopener">
                  <img src="images/piman-thumbnail.webp" alt="piman 縮圖">
                </a>
                <div>
                  <div>Figma</div>
                  <div>⬅ ⬅ ⬅</div>
                </div>
              </li>
              <li>
                <a href="https://github.com/ya-sai/paprika" title="另開視窗前往 piman nuxt template-paprika" target="_blank" rel="noreferrer noopener">
                  <img src="images/paprika-thumbnail.webp" alt="">
                </a>
                <div>
                  <div>Nuxt Template</div>
                  <div>⬅ ⬅ ⬅</div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="subscribe">
          <div class="subscribe__box">
            <div class="subscribe-left">
              <img src="images/subscribe-bg.svg" alt="">
            </div>
            <div class="subscribe-right">
              <div class="subscribe-title">讓我們保持聯繫吧！</div>
              <p>Piman 會不定期分享無障礙網頁設計的資訊，歡迎訂閱！ 📰</p>
              <!-- <div class="subscribe-title">Let's stay in touch!</div>
              <p>Join our newsletter, so that we reach out to you with our best news. 📰</p> -->
              <form
                name="reply-form"
                id="reply-gform"
                enctype="text/plain"
                method="get"
                action="https://docs.google.com/forms/d/e/1FAIpQLScsA7ZXQHWHU2pWEM7jiL0kjVzqCJg1djOsuMao3f84B7neMQ/formResponse?"
                target="hidden_iframe"
                onsubmit="submitted=true;"
              >
                <label for="entry.1423896898">
                  <bpa-input placeholder="請輸入電子郵件地址" name="entry.1423896898" id="entry.1423896898"/>
                </label>
                <br>
                <bpa-button type="submit" theme="primary">訂閱電子報</bpa-button>
                <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>
              </form>
            </div>
          </div>
        </section>
      </article>
    </div>
    <div class="page-footer">
      <div>
        <div class="footer-logo"><nuxt-link to="/" title="回首頁">Piman</nuxt-link></div>
        <div><strong><a href="mailto:yasai@blueplanet.com.tw?subject=從 Landing Page 問問題" title="另開視窗填寫電子郵件" target="_blank" rel="noreferrer noopener">yasai@blueplanet.com.tw</a></strong></div>
        <br>
        <div>© Blueplanet Inc.</div>
      </div>
      <div>
        <ul>
          <li>
            <a href="" title="另開視窗前往 Github" target="_blank" rel="noreferrer noopener">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <title>另開視窗前往 Github</title>
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, useMeta, ref, watch, useFetch } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'landingpage',
  setup(_, {root}) {

    const menuValue = ref('')
    const menuOptions = [
    { 
      type: 'link',
      url: '#intro',
      label: '簡介',
    },
    { 
      type: 'link',
      url: '#reasons',
      label: '為什麼選擇 Piman',
    },
    { 
      type: 'link',
      url: '#demo',
      label: '範例',
    },
    { 
      type: 'link',
      url: '#faq',
      label: '常見問答',
    },
    { 
      type: 'link',
      url: '#resources',
      label: '資源下載',
    },
  ]
    return {
      menuValue, menuOptions
    }
  },
})
</script>