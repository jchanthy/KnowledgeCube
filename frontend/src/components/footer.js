import imageLogo from '../assets/imags/AUPP_Block_Logo.png'

const Footer = () => {

    return (
        <>
            <footer className="footer footer-center bg-primary text-primary-content p-10">
                <aside>
                    <img src={imageLogo} alt={'school logo'} className={'w-16'}/>
                    <p className="font-bold">
                        56 315 Street, Phnom Penh, Phnom Penh 120408 · 2.8 km <br/>
                    </p>
                </aside>
            </footer>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right reserved by AUPP. This is Capstone Project.
                    </p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;
