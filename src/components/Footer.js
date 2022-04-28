import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>TravelX</h1>
                    <p>We are here to create the best Travel Experience for you.</p>
                </FooterDesc>
                <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/about">Contact</FooterLink>
                <FooterLink>Contact</FooterLink>
                <FooterLink>Contact</FooterLink>
                <FooterLink>Contact</FooterLink>
                </FooterLinkItems>      
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/about">Contact</FooterLink>
                <FooterLink>Contact</FooterLink>
                <FooterLink>Contact</FooterLink>
                <FooterLink>Contact</FooterLink>
                </FooterLinkItems>

            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`

const FooterDesc = styled.div`
    padding: 0 2rem;

    h1 {
        margin-bottom: 3rem;
        color: #fa6a2e;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinksWrapper = styled.div`
    display: grid:
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-item: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLink = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLinkTitle = styled(Link)`
    text-decoration: none;
    margin-bottom: .5rem
    font-size: 14px;
    color: #3d3d4e;
    cursor: pointer;

    &:hover {
        color: #f26a2e;
        transition: .3s ease-out;
    }
`
