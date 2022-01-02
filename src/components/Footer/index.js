import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaGithub } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FootImg
} from './FooterElements';

import white from '../../images/greenLotus.png';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle>Features</FooterLinkTitle>
                                <FooterLink to="/bmiCalculator">BMI Calculator</FooterLink>
                                <FooterLink to="/workouts">Workouts</FooterLink>
                                <FooterLink to="/workouts">Diets</FooterLink>
                                <FooterLink to="/shop">Shop</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                <FooterLink to="/signin">GitHub</FooterLink>
                            </FooterLinkItems>

                        </FooterLinksWrapper>

                        <FooterLinksWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/signin">Our mission</FooterLink>
                                <FooterLink to="/devs">Developers</FooterLink>
                                <FooterLink to="/signin">Contact us</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                <FooterLink to="/signin">GitHub</FooterLink>
                            </FooterLinkItems>

                        </FooterLinksWrapper>
                    </FooterLinksContainer>

                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                <FootImg src={white} />
                            </SocialLogo>
                            <WebsiteRights>Infinity Lotus &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink
                                    href="https://bg-bg.facebook.com/"
                                    target="_blank"
                                    aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>

                                <SocialIconLink
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    aria-label="YouTube">
                                    <FaYoutube />
                                </SocialIconLink>

                                <SocialIconLink
                                    href="https://twitter.com/?lang=bg"
                                    target="_blank"
                                    aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>

                                <SocialIconLink
                                    href="https://github.com/hristokarchev25/Project-AA2"
                                    target="_blank"
                                    aria-label="GitHub">
                                    <FaGithub />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer;
