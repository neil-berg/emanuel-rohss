import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Query all sections of the CV from Airtable
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

  const sections = [
    {
      title: "Solo",
      items: soloItems,
    },
    {
      title: "Group",
      items: groupItems,
    },
    {
      title: "Curated Exhibitions",
      items: curatedExhibitionsItems,
    },
    {
      title: "Publication and Catalogues",
      items: publicationsAndCataloguesItems,
    },
    {
      title: "Press",
      items: pressItems,
    },
    {
      title: "Awards and Residencies",
      items: awardsAndResidenciesItems,
    },
    {
      title: "Talks and Lectures",
      items: talksAndLecturesItems,
    },
  ]

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
        <li className="section__list-item" key={j}>
          <p className="section__list-item-text">
            <a
              className="section__list-item-link"
              href={item.data.link_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.data.link_text}
            </a>
            <span> {item.data.text}</span>
          </p>
        </li>
      ))
      return (
        <ul className="section__list" key={i}>
          <h3 className="section__list-header">{year}</h3>
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
            className="contact__email-link"
            href="mailto:emanuel.rohss@gmail.com"
          >
            emanuel.rohss@gmail.com{" "}
          </a>
        </section>
        {renderSections}
        <section className="section">
          <h2 className="section__header">Education</h2>
          <ul className="section__list">
            <li className="section__list-item">
              MFA, 2013, Royal College of Arts, London, UK, (Painting)
            </li>
            <li className="section__list-item">
              BFA, 2011, National College of Art & Design, Dublin, IRL,
              (Painting)
            </li>
            <li className="section__list-item">
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
    opacity: ${props => (props.isSidebarOpen ? "1" : "0")};
    transition: all 0.3s linear;
    overflow-y: scroll;
  }

  .section {
    font-size: 0.85em;
    margin: 0 auto;
    max-width: 600px;
    padding: 1rem;
  }

  .section__header {
    font-weight: normal;
    font-size: 1.5em;
    border-bottom: 1px black solid;
    margin-bottom: 0.75rem;
  }

  .section__list-item {
    margin: 0;
    padding: 0;
    font-size: 1em;
  }

  .section__list-item:last-child {
    margin-bottom: 1rem;
  }

  .section__list-header {
    font-weight: normal;
    font-size: 1em;
    margin: 0;
  }

  .section__list-item-text,
  .section__list-item-link {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  .section__list-item-link:visited {
    color: blue;
  }

  .contact {
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }

  .contact__email-link {
    text-decoration: none;
    margin-left: 1rem;
    font-size: 1.2em;
  }
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

export default Sidebar
