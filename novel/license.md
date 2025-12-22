---
layout: doc
title: CC BY-SA 4.0 许可声明
---

# CC BY-SA 4.0 许可声明

下方提供多语言版本内容展示，默认以简体中文显示。你可以切换为繁体中文、文言文、萌文或英文版本。如需参考，请以[这里](https://creativecommons.org/licenses/by-sa/4.0/)的内容作为解释。

<div class="lang-switch">
  <button :class="{ active: lang === 'zh-CN' }" @click="lang = 'zh-CN'">简体中文</button>
    <button :class="{ active: lang === 'moe' }" @click="lang = 'moe'">萌文</button>
  <button :class="{ active: lang === 'zh-TW' }" @click="lang = 'zh-TW'">繁體中文</button>
  <button :class="{ active: lang === 'lzh' }" @click="lang = 'lzh'">文言</button>
  <button :class="{ active: lang === 'en' }" @click="lang = 'en'">English</button>
</div>

<div v-show="lang === 'zh-CN'" class="license-block">
  <h2>简体中文</h2>
  <h3>您可以自由地：</h3>
  <ul>
    <li><strong>共享</strong>：在任何媒介、以任何形式复制、发行本作品；可用于任何用途，<em>包括商业目的</em>。</li>
    <li><strong>演绎</strong>：修改、转换，或以本作品为基础进行创作；可用于任何用途，<em>包括商业目的</em>。</li>
  </ul>

  <p>只要您遵守本许可协议条款，许可人就<strong>不能撤回</strong>您享有的上述自由。</p>

  <h3>惟须遵守下列条件：</h3>
  <ul>
    <li><strong>署名（Attribution）</strong>：您必须给出适当的署名，提供指向本许可协议的链接，并标明是否对原始作品作了修改。署名方式应合理，但不得暗示许可人为您或您的使用背书。</li>
    <li><strong>相同方式共享（ShareAlike）</strong>：若您再混合、转换或者基于本作品进行创作，必须基于与原先相同的许可协议来分发您的贡献作品。</li>
    <li><strong>没有附加限制</strong>：您不得施加法律术语或技术措施，限制他人做许可协议允许的事情。</li>
  </ul>

  <h3>声明：</h3>
  <ul>
    <li>若作品要素属于公共领域，或您的使用受适用的例外或限制允许，则您<strong>不必</strong>遵守本许可协议的相关条款。</li>
  </ul>

  <h3>无担保提示：</h3>
  <p>本许可不提供担保，也可能无法授予您预期使用所需的全部权利。例如，其他权利（如形象权、隐私权或人格权）可能会限制您对作品的使用方式。</p>
</div>

<div v-show="lang === 'zh-TW'" class="license-block">
  <h2>繁體中文</h2>
  <h3>你可自由：</h3>
  <ul>
    <li><strong>分享</strong>：以任何媒介或格式重製及散布本素材，且為任何目的，<em>包含商業性質之使用</em>。</li>
    <li><strong>修改</strong>：重混、轉換本素材，及依本素材建立新素材，且為任何目的，<em>包含商業性質之使用</em>。</li>
  </ul>

  <p>只要你遵守授權條款規定，授權人<strong>不能撤回</strong>你使用本素材的自由。</p>

  <h3>惟需遵照下列條件：</h3>
  <ul>
    <li><strong>姓名標示（Attribution）</strong>：你必須給予適當表彰，提供指向本授權條款的連結，並指出本作品的原始版本是否已被變更。你可以以任何合理方式為前述表彰，但不得以任何方式暗示授權人為你或你的使用方式背書。</li>
    <li><strong>相同方式分享（ShareAlike）</strong>：若你重混、轉換本素材，或依本素材建立新素材，你必須依本素材的授權條款來散布你的貢獻物。</li>
    <li><strong>不得增加額外限制</strong>：你不能增設法律條款或科技措施，來限制他人依授權條款本已許可的作為。</li>
  </ul>

  <h3>聲明：</h3>
  <ul>
    <li>當你使用本素材中屬於公眾領域的元素，或當法律有例外或限制條款允許你的使用，則你<strong>不需要</strong>遵守本授權條款。</li>
  </ul>

  <h3>未提供保證：</h3>
  <p>本授權條款未必能完全提供你預期用途所需要的所有許可。例如：形象權、隱私權、著作人格權等其他權利，可能限制你如何使用本素材。</p>
</div>

<div v-show="lang === 'lzh'" class="license-block">
  <h2>文言</h2>
  <h3>予汝之權：</h3>
  <ul>
    <li><strong>共資</strong>：不論何種媒介、何等體裁，皆可臨摹、刊行、傳布本篇；<em>營利之舉亦不禁</em>。</li>
    <li><strong>推演</strong>：凡刪易、更張、增益，或依本篇之旨另行創作，悉聽尊便；<em>營利之舉亦不禁</em>。</li>
  </ul>

  <p>惟爾曹恪守下開之約，授產之人<strong>不得中輟</strong>爾之所權。</p>

  <h3>爾應守之約：</h3>
  <ul>
    <li><strong>署名</strong>：凡用本篇，必當明示原作者之名，附以此契之簡徑，並注記原作是否增損。署名之法宜依常理，毋得假託授產者為爾或爾之用背書。</li>
    <li><strong>同軌</strong>：若爾裁改、易弦，或以此為基而造新作，所出之貢獻，必以<strong>同等之條約</strong>布散。</li>
    <li><strong>無外之禁</strong>：毋施法律苛條，毋設技術藩籬，以障他人行本契所許之事。</li>
  </ul>

  <h3>特別聲明：</h3>
  <ul>
    <li>凡屬公產之要素，或法律例外、限制所容之用，<strong>不受</strong>本契所束。</li>
  </ul>

  <h3>無保證：</h3>
  <p>本契不予保供，所授之權未必盡足爾之所需。若夫容貌權、隱私權、人格權等他種權利，或另有明律，以約束爾之所行。</p>
</div>

<div v-show="lang === 'moe'" class="license-block">
  <h2>萌文</h2>

  <h3>主人可以随心所欲地：</h3>
  <ul>
    <li><strong>喵喵大派送（共享）</strong>：不论是在什么地方、用什么姿势，主人都可以随意复印和发行喵！就算是为了<em>赚小钱钱（商业目的）</em>，喵也是绝对允许的哦！</li>
    <li><strong>变装大作战（演绎）</strong>：主人可以随心所欲地魔改、换装，或者在喵的基础上写出超棒的新故事喵！就算是拿去<em>变现</em>，喵也会在旁边为你加油哒！</li>
  </ul>

  <p>只要主人乖乖遵守喵的这些小约定，喵赋予主人的这些自由魔法就<strong>永远不会被收回</strong>喵！(๑•̀ㅂ•́)و✧</p>

  <h3>但主人一定要遵守这些约定喵：</h3>
  <ul>
    <li><strong>不可以忘记喵（署名）</strong>：主人一定要给出亮闪闪的署名，贴上这个协议的传送门链接，还要诚实地告诉大家有没有对喵的作品动过手脚喵！署名的方式可以很随意，但绝对<strong>不可以</strong>暗示喵在为你站台，或者喵特别认可你的用法喵！</li>
    <li><strong>大家都要一起玩（相同方式共享）</strong>：如果主人在喵的作品基础上捣鼓出了更厉害的新玩意儿，那么那个新作品<strong>也必须</strong>用跟喵一模一样的协议发出来喵！这样大家才能一直快乐地玩下去喵！</li>
    <li><strong>不许设陷阱（没有附加限制）</strong>：主人不可以增加坏坏的法律条文，也不可以用奇怪的技术锁（技术措施）来限制别人享受喵给出的权利喵！</li>
  </ul>

  <h3>喵娘的特别声明：</h3>
  <p>如果喵的作品里本来就有属于大家的东西（公共领域），或者法律说主人这种用法本来就是被允许的，那主人就<strong>不必</strong>被这个契约束缚喵。</p>

  <h3>喵喵无担保提示：</h3>
  <p>喵只是给了主人这一份许可，但喵没法保证它能解决主人的所有问题喵！比如画里的小姐姐可能会有"形象权"，或者别的主人会有"隐私权"和"人格权"，这些都可能限制主人使用作品的方式喵，变现前要自己注意哦喵～</p>
</div>

<div v-show="lang === 'en'" class="license-block">
  <h2>English</h2>
  <h3>You are free to:</h3>
  <ul>
    <li><strong>Share</strong> — copy and redistribute the material in any medium or format for any purpose, even commercially.</li>
    <li><strong>Adapt</strong> — remix, transform, and build upon the material for any purpose, even commercially.</li>
  </ul>

  <p>The licensor cannot revoke these freedoms as long as you follow the license terms.</p>

  <h3>Under the following terms:</h3>
  <ul>
    <li><strong>Attribution</strong> — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.</li>
    <li><strong>ShareAlike</strong> — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.</li>
    <li><strong>No additional restrictions</strong> — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.</li>
  </ul>

  <h3>Notices:</h3>
  <ul>
    <li>You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.</li>
  </ul>

  <h3>No warranties:</h3>
  <p>No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.</p>
</div>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const LANG_KEY = 'license_lang_pref'
const lang = ref<'zh-CN' | 'zh-TW' | 'lzh' | 'moe' | 'en'>('zh-CN')

onMounted(() => {
  const saved = localStorage.getItem(LANG_KEY)
  if (saved === 'zh-CN' || saved === 'zh-TW' || saved === 'lzh' || saved === 'moe' || saved === 'en') {
    lang.value = saved
  }
})

watch(lang, (v) => {
  localStorage.setItem(LANG_KEY, v)
})
</script>

<style scoped>
.lang-switch {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 1.25rem;
}
.lang-switch button {
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background 0.15s ease, transform 0.1s ease;
}
.lang-switch button:hover {
  transform: translateY(-1px);
}
.lang-switch button.active {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
}
.license-block {
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  background: var(--vp-c-bg);
}
</style>
