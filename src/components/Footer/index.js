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
    FootImg,
    FooterHref
} from './FooterElements';

import white from '../../images/white.png';

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
                                <FooterLink to="/">Home</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Store</FooterLinkTitle>
                                <FooterLink to="/shop">Protein</FooterLink>
                                <FooterLink to="/shop">Yoga Mats</FooterLink>
                                <FooterLink to="/shop">Gym Equipment: home</FooterLink>
                                <FooterLink to="/shop">Gym Equipment: gym</FooterLink>
                            </FooterLinkItems>

                        </FooterLinksWrapper>

                        <FooterLinksWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/about">Our mission</FooterLink>
                                <FooterLink to="/devs">Developers</FooterLink>
                                <FooterLink to="/contactUs">Contact us</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Useful links</FooterLinkTitle>
                                <FooterHref
                                    href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/9-benefits-of-yoga"
                                    target="_blank">Benefits of yoga</FooterHref>
                                <FooterHref href="https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques"
                                    target="_blank">Breathing</FooterHref>
                                <FooterHref href="https://www.medicalnewstoday.com/articles/245259"
                                    target="_blank">Healthy foods</FooterHref>
                                <FooterHref href="https://www.healthline.com/health/exercise-fitness/rest-day"
                                    target="_blank">Rest days</FooterHref>
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
