import React from 'react'
import '../../../.././assets/styles/layout/Footer.scss'
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
export default function Footer() {
    const { Option } = Select;
    function handleChange(value) {
        i18n.changeLanguage(value)
    }
    const { t, i18n } = useTranslation();

    return (
        <div className="footer" style={{ backgroundColor: '#0b1a2a' }}>
            <footer className="px-4 pt-5 divide-y bg-coolGray-100 text-coolGray-800">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <a href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <img src="https://themes.themewild.com/vidstream/assets/images/logo.png" style={{ width: '50%' }} />
                        
                        </a>
                        <div class="wrapper m-0 mt-3">
                                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100048916264654" class="icon facebook">
                                            <div class="tooltip">Facebook</div>
                                            <span ><i class="fab   fa-facebook-f"></i></span>
                                        </a>
                                        <a href="https://twitter.com/" target="_blank" class="icon twitter">
                                            <div class="tooltip">Twitter</div>
                                            <span><i class="fab fa-twitter"></i></span>
                                        </a><br/>
                                        <a href="https://www.instagram.com/" target="_blank" class="icon instagram">
                                            <div class="tooltip">Instagram</div>
                                            <span><i class="fab fa-instagram"></i></span>
                                        </a>
                                        <a href="https://www.youtube.com/" target="_blank" class="icon youtube">
                                            <div class="tooltip">Youtube</div>
                                            <span><i class="fab fa-youtube"></i></span>
                                        </a>
                                    </div>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase  text-contact text-coolGray-900">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a className="text-big" href="#">Features</a>
                                </li>
                                <li>
                                    <a className="text-big" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a className="text-big" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a className="text-big" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide text-contact uppercase text-coolGray-900">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a className="text-big" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a className="text-big" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase text-contact text-coolGray-900">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a className="text-big" href="#">Public API</a>
                                </li>
                                <li>
                                    <a className="text-big" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a className="text-big" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                        <p className="pb-1 text-contact text-lg font-medium">Important Link</p>
                                <ul>
                                    <li>
                                        <a href="#" className="text-big">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-big">Movies</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-big">Tv Shows</a>
                                    </li>
                                </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-coolGray-600">
                    <span className="mr-5" >© 1968 Company Co. All rights reserved.</span>
                <Select  defaultValue="en" style={{ width: 150 }} onChange={handleChange}>
                                            <Option value="vi">VietNam <img style={{ width: '20%', display: 'inline' }} src="http://4.bp.blogspot.com/-gg6pHTutcPo/UXUBQhYn8wI/AAAAAAAABCA/sX11UKGEcjY/s1600/hinh-anh-la-co-viet-nam-dep+%25285%2529.jpg" /></Option>
                                            <Option value="en">English <img style={{ width: '20%', display: 'inline' }} src="https://tse1.mm.bing.net/th?id=OIP.tJhKGdXPZwqt8k1i5o3u0gHaD5&pid=Api&P=0&w=313&h=165" /></Option>
                                            <Option value="chi">China  <img style={{ width: '20%', display: 'inline' }} src="https://4.bp.blogspot.com/-p7Qn3-rAcUE/Td5uZWtbGNI/AAAAAAAAAhI/8Xlwy-KaRFA/s1600/la_co_trung_quoc.jpg" /></Option>
                                        </Select>
                </div>
            </footer>

        </div>
    )
}
