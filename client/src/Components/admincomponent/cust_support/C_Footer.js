
import React, {Component} from 'react';

export default class C_Footer extends Component {
    render(){
        return (
        <div>
  {/* Modal: Layout */}
  <div className="modal fade" id="LayoutModal" tabIndex={-1}>
    <div className="modal-dialog modal-lg modal-dialog-vertical modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Ready to build Layouts</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body custom_scroll">
          <div className="mb-4">Customize your overview page layout. Choose the one that best fits your needs.</div>
          <h5 className="mt-5 pb-2">Left sidebar with icon</h5>
          <div className="row g-3">
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-default.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Default</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../index-mini-sidebar.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-mini-sidebar.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Default + Menu Collapse</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-c/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-c.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Menu + Tab view</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-g/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-g.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Icon menu with Grid view</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-i/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-i.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Dual tone icon + menu list</h6>
                </div>
              </a>
            </div>
          </div>
          <h5 className="mt-5 pb-2">Header top menu</h5>
          <div className="row g-3">
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-d/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-d.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Header <span className="text-muted small">(Fluid)</span></h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-d-container/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-d-container.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Header <span className="text-muted small">(Container)</span></h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-d-sub-header/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-d-sub-header.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Header + Sub menu <span className="text-muted small">(Fluid)</span></h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-d-sub-header-container/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-d-sub-header-container.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Header + Submenu <span className="text-muted small">(Container)</span></h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-f/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-f.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Header + Submenu, Overlay <span className="text-muted small">(Fluid)</span></h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-f-container/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-f-container.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Header + Submenu, Overlay <span className="text-muted small">(Container)</span></h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift border border-primary bg-primary text-light" href="index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-l.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Megamenu + Animation Overlay</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-q/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-q.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Header + Megamenu sticky</h6>
                </div>
              </a>
            </div>
          </div>
          <h5 className="mt-5 pb-2">Content Combinations</h5>
          <div className="row g-3">
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-b/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-b.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Default</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-e/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-e.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Default</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-h/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-h.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Default</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-k/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-k.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Default</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-p/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-p.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Background BG</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-n/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-n.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Sidebar with Tab</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-sm-12">
              <a className="card lift" href="../layout-m/index.html">
                <img className="card-img-top" src="../../../assets/images/layout/layout-m.svg" alt />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">Sidebar with Header <span className="small">(Fixed)</span></h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal: Setting */}
  <div className="modal fade" id="SettingsModal" tabIndex={-1}>
    <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">AL-UI Setting</h5>
        </div>
        <div className="modal-body custom_scroll">
          {/* Settings: Font */}
          <div className="setting-font">
            <small className="card-title text-muted">Google font Settings</small>
            <ul className="list-group font_setting mb-3 mt-1">
              <li className="list-group-item py-1 px-2">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="radio" name="font" id="font-opensans" defaultValue="font-opensans" defaultChecked />
                  <label className="form-check-label" htmlFor="font-opensans">
                    Open Sans Google Font
                  </label>
                </div>
              </li>
              <li className="list-group-item py-1 px-2">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="radio" name="font" id="font-quicksand" defaultValue="font-quicksand" />
                  <label className="form-check-label" htmlFor="font-quicksand">
                    Quicksand Google Font
                  </label>
                </div>
              </li>
              <li className="list-group-item py-1 px-2">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="radio" name="font" id="font-nunito" defaultValue="font-nunito" />
                  <label className="form-check-label" htmlFor="font-nunito">
                    Nunito Google Font
                  </label>
                </div>
              </li>
              <li className="list-group-item py-1 px-2">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="radio" name="font" id="font-Raleway" defaultValue="font-raleway" />
                  <label className="form-check-label" htmlFor="font-Raleway">
                    Raleway Google Font
                  </label>
                </div>
              </li>
            </ul>
          </div>
          {/* Settings: Color */}
          <div className="setting-theme">
            <small className="card-title text-muted">Theme Color Settings</small>
            <ul className="list-unstyled d-flex justify-content-between choose-skin mb-2 mt-1">
              <li data-theme="indigo"><div className="indigo" /></li>
              <li data-theme="blue"><div className="blue" /></li>
              <li data-theme="cyan" className="active"><div className="cyan" /></li>
              <li data-theme="green"><div className="green" /></li>
              <li data-theme="orange"><div className="orange" /></li>
              <li data-theme="blush"><div className="blush" /></li>
              <li data-theme="red"><div className="red" /></li>
              <li data-theme="dynamic"><div className="dynamic"><i className="fa fa-paint-brush" /></div></li>
            </ul>
            <div className="form-check form-switch gradient-switch mb-1">
              <input className="form-check-input" type="checkbox" id="CheckGradient" />
              <label className="form-check-label" htmlFor="CheckGradient">Enable Gradient! ( Sidebar )</label>
            </div>
          </div>
          {/* Settings: bg image */}
          <div className="setting-img mb-3">
            <div className="form-check form-switch imagebg-switch mb-1">
              <input className="form-check-input" type="checkbox" id="CheckImage" />
              <label className="form-check-label" htmlFor="CheckImage">Set Background Image (Sidebar)</label>
            </div>
            <div className="bg-images">
              <ul className="list-unstyled d-flex justify-content-between">
                <li className="sidebar-img-1 sidebar-img-active"><a className="rounded sidebar-img" id="img-1" href="#"><img src="../../../assets/images/sidebar-bg/sidebar-1.jpg" alt /></a></li>
                <li className="sidebar-img-2"><a className="rounded sidebar-img" id="img-2" href="#"><img src="../../../assets/images/sidebar-bg/sidebar-2.jpg" alt /></a></li>
                <li className="sidebar-img-3"><a className="rounded sidebar-img" id="img-3" href="#"><img src="../../../assets/images/sidebar-bg/sidebar-3.jpg" alt /></a></li>
                <li className="sidebar-img-4"><a className="rounded sidebar-img" id="img-4" href="#"><img src="../../../assets/images/sidebar-bg/sidebar-4.jpg" alt /></a></li>
                <li className="sidebar-img-5"><a className="rounded sidebar-img" id="img-5" href="#"><img src="../../../assets/images/sidebar-bg/sidebar-5.jpg" alt /></a></li>
              </ul>
            </div>
          </div>
          {/* Settings: Theme dynamics */}
          <div className="dt-setting">
            <small className="card-title text-muted">Dynamic Color Settings</small>
            <ul className="list-group list-unstyled mb-3 mt-1">
              <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                <label>Primary Color</label>
                <button id="primaryColorPicker" className="btn bg-primary avatar xs border-0 rounded-0" />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                <label>Secondary Color</label>
                <button id="secondaryColorPicker" className="btn bg-secondary avatar xs border-0 rounded-0" />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                <label className="text-muted small">Chart Color 1</label>
                <button id="chartColorPicker1" className="btn chart-color1 avatar xs border-0 rounded-0" />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                <label className="text-muted small">Chart Color 2</label>
                <button id="chartColorPicker2" className="btn chart-color2 avatar xs border-0 rounded-0" />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                <label className="text-muted small">Chart Color 3</label>
                <button id="chartColorPicker3" className="btn chart-color3 avatar xs border-0 rounded-0" />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                <label className="text-muted small">Chart Color 4</label>
                <button id="chartColorPicker4" className="btn chart-color4 avatar xs border-0 rounded-0" />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                <label className="text-muted small">Chart Color 5</label>
                <button id="chartColorPicker5" className="btn chart-color5 avatar xs border-0 rounded-0" />
              </li>
            </ul>
          </div>
          {/* Settings: Light/dark */}
          <div className="setting-mode">
            <small className="card-title text-muted">Light/Dark &amp; Contrast Layout</small>
            <ul className="list-group list-unstyled mb-0 mt-1">
              <li className="list-group-item d-flex align-items-center py-1 px-2">
                <div className="form-check form-switch theme-switch mb-0">
                  <input className="form-check-input" type="checkbox" id="theme-switch" />
                  <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode!</label>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center py-1 px-2">
                <div className="form-check form-switch theme-high-contrast mb-0">
                  <input className="form-check-input" type="checkbox" id="theme-high-contrast" />
                  <label className="form-check-label" htmlFor="theme-high-contrast">Enable High Contrast</label>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center py-1 px-2">
                <div className="form-check form-switch theme-rtl mb-0">
                  <input className="form-check-input" type="checkbox" id="theme-rtl" />
                  <label className="form-check-label" htmlFor="theme-rtl">Enable RTL Mode!</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-start text-center">
          <button type="button" className="btn flex-fill btn-primary lift">Save Changes</button>
          <button type="button" className="btn flex-fill btn-white border lift" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>


        )
    }
}