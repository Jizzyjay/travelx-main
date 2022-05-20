import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query {
    allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {in: ["testimonial1", "testimonials2"]}}) {
        edges {
        node {
            childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    }
}`) 

    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline 
                            css={`
                            color: #3fffa8;
                            font-size: 2rem;
                            margin-bottom: 1rem;
                            `}/> 
                        <h3>John Doe</h3>
                        {" "}
                        <p>"One of the best travel experience of my life"</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb 
                            css={`
                            color: #f9b19b;
                            font-size: 2rem;
                            margin-bottom: 1rem;
                            `}/>
                        <h3>Sarah Mike</h3>
                        <p>"TravelX made my vacation super fun and easy with my trip and accomodation. It was so fun exploring the mountains"</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid} />
                ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vh - 1300px) / 2);
    height: 100%;
`
const TopLine = styled.p`
    color: #077bf1;
    padding-left: 2rem;
    font-size: 1rem;
    margin-bottom: .75rem;
`
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid:
    grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p{
        color: #3b3b3b;
    }
`
const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px:

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const Images = styled(Img) `
    border-radius: 10px;
    height: 100%;
`