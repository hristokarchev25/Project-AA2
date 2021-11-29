import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements';
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Test</FooterLink>
                                <FooterLink to="/signin">Yoga</FooterLink>
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

                        <FooterLinksWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Test</FooterLink>
                                <FooterLink to="/signin">Yoga</FooterLink>
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
                            <SocialLogo to='/'>alpha</SocialLogo>
                            <WebsiteRights>alpha &copy; {new Date().getFullYear()}
                                All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>

                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="YouTube">
                                    <FaYoutube />
                                </SocialIconLink>

                                <SocialIconLink
                                    href="/"
                                    target="_blank"
                                    aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>

                                <SocialIconLink
                                    href="/"
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
