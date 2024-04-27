class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <!-- 导航栏 -->
            <!-- 导航栏 hover 变色 https://codingyaar.com/bootstrap-navbar-hover-background-color/-->
            <nav class="navbar navbar-expand-lg">
                <!-- 网站标题 -->
                <div class="container">
                    <a class="navbar-brand logo-font self-main-color" href="/">
                        <img src="/resources/NFS11-256.png" class="site-icon" alt="Site Icon">
                        Eterance 的百宝箱
                    </a>
        
                    <!-- 切换按钮（适用于小屏幕设备）-->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        
                    <!-- 导航链接 -->
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    <i class="fa-solid fa-screwdriver-wrench"></i>
                                    工具列表
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://blog.baldcoder.top" target="_blank">
                                    <i class="fa-solid fa-blog"></i>
                                    博客
                                </a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-language fa-lg"></i>
                                    中文(简体)
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);" onclick="changeLanguage('zh-tw')">
                                            中文(繁體) <span class="lang-explain">中文(繁体)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);" onclick="changeLanguage('en-us')">
                                            English(US) <span class="lang-explain">英文(美国)</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <div class="form-check form-switch nav-toggle">
                                    <input class="form-check-input" type="checkbox" role="switch" id="darkModeToggle">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">黑暗模式</label>
                                </div>
                            </li>
                        </ul>                        
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('navbar-component', NavBar);