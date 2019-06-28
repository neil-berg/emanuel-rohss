import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;

  .cv {
    flex: 1;
    background: #999999;
    max-width: ${props => (props.isSidebarOpen ? `100%` : `0px`)};
    min-width: ${props => (props.isSidebarOpen ? `calc(100vw - 50px)` : `0px`)};
    overflow: hidden;
    opacity: ${props => (props.isSidebarOpen ? "1" : "0")};
    transition: all 0.3s linear;
    overflow-y: scroll;
  }

  // .content__solo,
  // .content__education,
  // .content__contact {
  //   font-size: 0.85em;
  //   margin: 0 auto;
  //   max-width: 600px;
  //   padding: 1rem;
  // }

  // .content__contact {
  //   display: flex;
  //   align-items: center;
  // }

  .clickbar {
    background: #0000ff;
    color: white;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .clickbar__text {
    writing-mode: vertical-rl;
    text-orientation: upright;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 1.35em;
  }
`

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "CV" } }) {
        nodes {
          data {
            section
            link_text
            link_url
            text
            year(formatString: "YYYY")
          }
        }
      }
    }
  `)

  // Extract each section of the CV from the queried data
  const soloItems = data.allAirtable.nodes.filter(
    node => node.data.section === "Solo"
  )
  const groupItems = data.allAirtable.nodes.filter(
    node => node.data.section === "Group"
  )
  const curatedExhibitionsItems = data.allAirtable.nodes.filter(
    node => node.data.section === "Curated Exhibitions"
  )
  const publicationsAndCataloguesItems = data.allAirtable.nodes.filter(
    node => node.data.section === "Publications and Catalogues"
  )
  const pressItems = data.allAirtable.nodes.filter(
    node => node.data.section === "Press"
  )
  const awardsAndResidenciesItems = data.allAirtable.nodes.filter(
    node => node.data.section === "Awards and Residencies"
  )
  const talksAndLecturesItems = data.allAirtable.nodes.filter(
    node => node.data.section === "Talks/Lectures"
  )

  // const sections = [
  //   solo,
  //   group,
  //   curatedExhibitions,
  //   publicationsAndCatalogues,
  //   press,
  //   awardsAndResidencies,
  //   talksAndLectures,
  // ]

  const sections = [
    {
      title: "Solo",
      items: soloItems,
    },
    {
      title: "Group",
      items: groupItems,
    },
  ]

  //console.log(sections)

  const renderSections = sections.map((section, i) => {
    // console.log(section.items)
    const yearsInSection = Array.from(
      new Set(section.items.map(item => item.data.year))
    ).sort((a, b) => b - a)

    const itemsByYear = yearsInSection.map(year => {
      return {
        year,
        items: section.items.filter(item => item.data.year === year),
      }
    })

    const listOfItems = itemsByYear.map((element, i) => {
      const year = element.year
      const items = element.items.map((item, j) => (
        <li key={j}>
          <p>
            <a href={item.data.link_url}>{item.data.link_text}</a>
            <span>{item.data.text}</span>
          </p>
        </li>
      ))
      return (
        <ul key={i}>
          <h3>{year}</h3>
          {items}
        </ul>
      )
    })

    return (
      <section className="section" key={i}>
        <h2 className="section__header">{section.title}</h2>
        {listOfItems}
      </section>
    )
  })

  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen}>
      <article className="cv">
        <section className="contact">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <a
            href="mailto:emanuel.rohss@gmail.com "
            style={{ marginLeft: "1rem", fontSize: "1.2em" }}
          >
            emanuel.rohss@gmail.com{" "}
          </a>
        </section>
        {renderSections}
        <section className="education">
          <h2 className="education-header--big">Education</h2>
          <ul className="education-list">
            <li className="education-list-item">
              MFA, 2013, Royal College of Arts, London, UK, (Painting)
            </li>
            <li className="education-list-item">
              BFA, 2011, National College of Art & Design, Dublin, IRL,
              (Painting)
            </li>
            <li className="education-list-item">
              BA, 2010 Valand Academy, Gothenburg, SE, (Fine Art)
            </li>
          </ul>
        </section>
      </article>
      <div
        className="clickbar"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <p className="clickbar__text">Emanuel Röhss</p>
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar
