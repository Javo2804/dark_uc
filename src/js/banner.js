$("link[href='/css/web_defaultmenu.css']").remove();
$("link[href='/css/web_defaultprint.css']").remove();
$("link[href='/css/web_defaulthome.css']").remove();
$('h1:contains("SCT WWW Information System")').hide();
$('head').append('<link rel="stylesheet" href="https://kit-digital-uc-prod.s3.amazonaws.com/uc-kitdigital/css/uc-kitdigital.css">');
$('body').children().wrapAll("<div class='container' />");
$('body').prepend(`
<header class="uc-header">
  <div class="uc-top-bar">
    <div class="container">
      <div class="top-bar_mobile-logo d-block d-lg-none">
        <img src="https://kit-digital-uc-prod.s3.amazonaws.com/assets/logo-uc-comprimido.svg" alt="Logo UC" class="img-fluid">
      </div>
      <div class="top-bar_links justify-content-between d-none d-lg-flex">
        <ul class="top-bar_links">
          <li>
            <a href="http://uc.cl/" target="_blank" class="text-size--sm external">
              ir al sitio UC
            </a>
          </li>
          <li>
            <a href="https://portal.uc.cl" target="_blank" class="text-size--sm external">
                Mi Portal UC
            </a>
        </li>
        </ul>
        <ul class="top-bar_links">
          <li>
            <a href="/ERPUC/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu" class="text-size--sm" id="ssbbackurl">
                Menú Principal
            </a>
          </li>
          <li>
            <a href="/ERPUC/twbksite.P_DispSiteMap?menu_name_in=bmenu.P_MainMnu&amp;depth_in=2&amp;columns_in=3" accesskey="2" class="text-size--sm">
                Mapa de Sitio
            </a>
          </li>
          <li>
            <a href="/ERPUC/twbkfrmt.P_DispHelp?pagename_in=bwskflib.P_SelDefTerm" accesskey="H" onclick="popup = window.open('/ERPUC/twbkfrmt.P_DispHelp?pagename_in=bwskflib.P_SelDefTerm', 'PopupPage','height=500,width=450,scrollbars=yes,resizable=yes'); return false" target="_blank" onmouseover="window.status='';  return true" onmouseout="window.status=''; return true" onfocus="window.status='';  return true" onblur="window.status=''; return true" class="text-size--sm external">
                Ayuda
            </a>
          </li>
          <li>
            <a href="twbkwbis.P_Logout" accesskey="3" class="text-size--sm">
                Salir
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <nav class="uc-navbar">
    <!-- Menú para versión Escritorio -->
    <div class="container d-none d-lg-block">
      <div class="row align-items-center">
        <div class="col-lg-3 col-xl-2">
          <img src="https://kit-digital-uc-prod.s3.amazonaws.com/assets/logo-uc-color.svg" alt="Logo de Facultad" class="img-fluid">
        </div>
        <div class="col-lg-8 col-xl-9">
          <div class="h2 text-font--serif text-color--blue mt-24">Sistema de Gestión Académica Estudiantil</div>
          <div class="text-color--gray p-size--lg">Autoservicio</div>
        </div>
      </div>
      <ul class="uc-navbar_nav">
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 1</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 2</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 3</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 4</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 5</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 6</a>
        </li>
      </ul>
    </div>
    <!-- Menú para versión Móvil -->
    <div class="uc-navbar_mobile d-block d-lg-none">
      <div class="uc-navbar_mobile-bar navbar-brand">
        <div class="uc-navbar_mobile-logo navbar-light">
          <div class="h2 text-font--serif text-color--blue">Título</div>
        </div>
        <a href="javascript:void(0);" class="uc-navbar_mobile-button" data-collapse="collapseMobileNav3">
          <span class="uc-icon"></span>
          Menú
        </a>
      </div>
      <div class="uc-navbar_mobile-content" data-toggle="collapseMobileNav3" data-open="false" style="height: 0;">
        <div class="uc-navbar_mobile-list">
          <a href="#" class="list-item">Item 1</a>
          <a href="#" class="list-item">Item 2</a>
          <a href="#" class="list-item">Item 3</a>
          <a href="#" class="list-item">Item 4</a>
        </div>
      </div>
    </div>
  </nav>
</header>
`);
$('table.datadisplaytable').addClass('uc-table');