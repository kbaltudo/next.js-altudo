import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../components/PageStructure/Container/Layout'
import { ourProfessionalRouter } from '../../lib/provider/mapper'
import Title from '../../components/Elements/Title'
import Teams from '../../components/Composits/Teams/Teams'
import Section from '../../components/PageStructure/Container/Section'
import Link from 'next/link'
import Loader from '../../components/PageContent/Loader/Loader'

type CheckBox = {
  checked?: boolean,
  id: any,
  parentElement: any,
  stateCheckbox: boolean
}
type SelectBox = {
  id: any,
  value: any,
}

// let fieldLocation : string[] = []

const OurProfessionals = ({ pageTemplate, pageResponse, provider, meta }: any) => {

  const [teamMembers, setTeamMembers] = useState(pageResponse.ourTeams)
  const [metaData, setMetaData] = useState(pageResponse.metadata)
  const [page, setPage] = useState(1)
  const [location, setLocation] = useState<Number[]>([])
  const [area_of_focus, setArea_of_focus] = useState<Number[]>([])
  const [title, settitle] = useState<string | null>("")
  const pages = metaData?.total_pages ? metaData.total_pages : ""
  const pagesArray = [...Array(pages)]
  const [isLoading, setIsLoading] = useState(false);
  const [activepage, SetActivepage] = useState(1);
  //const [countryCheck, setcountryCheck] = useState(false);
  // Set location data into array
  const setCountryArray = (field: any) => {
    setPage(1)
    let { checked, id } = field
    const stateCheckboxes = field.parentElement.parentElement.querySelectorAll(".state_input");
    if (checked) {
      location.push(id)
      //setcountryCheck(true)      
      stateCheckboxes.forEach((stateCheckbox: any) => { // loop over the state checkboxes
        stateCheckbox.checked = true; // set their checked property to true
      });
    } else {
      setLocation(location.filter(item => item !== id))
      for (let i = 0; i <= location.length; i++) {
        if (location[i] == id) {
          location.splice(i, id)
        }
      }
      //setcountryCheck(false)
      stateCheckboxes.forEach((stateCheckbox: any) => { // loop over the state checkboxes
        stateCheckbox.checked = false; // set their checked property to true
      });
    }
    setLocation(location.slice())
  }


  const setStateArray = (field: any) => {
    setPage(1)
    let { checked, id } = field
    if (checked) {
      location.push(id)
    } else {
      setLocation(location.filter(item => item !== id))
      for (let i = 0; i <= location.length; i++) {
        if (location[i] == id) {
          location.splice(i, id)
        }
      }
    }
    setLocation(location.slice())
  }
  //Set Area of focus Array
  const setAreaOfFocusArray = (field: any) => {
    setPage(1)
    let { checked, id } = field
    if (checked) {
      area_of_focus.push(id)
    } else {
      setArea_of_focus(area_of_focus.filter(item => item !== id))
      for (let i = 0; i <= area_of_focus.length; i++) {
        if (area_of_focus[i] == id) {
          area_of_focus.splice(i, id)
        }
      }
    }
    setArea_of_focus(area_of_focus.slice())
  }
  //Set Title
  const setTitle = (event: any) => {
    let { value, id } = event
    settitle(value)
  }

  useEffect(() => {
    (
      async () => {
        setIsLoading(true);
        let url = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/our-professionals`;

        // Validate and append page
        if (page) {
          url += `?page=${page}`;
        }

        // Validate and append location
        if (location && location.length > 0) {
          url += `&location=${location.toString()}`;
        }

        // Validate and append title
        if (title) {
          url += `&title=${title}`;
        }

        // Validate and append area_of_focus
        if (area_of_focus && area_of_focus.length > 0) {
          url += `&area_of_focus=${area_of_focus.toString()}`;
        }
        //console.log(url)
        const membersdata = await fetch(url, {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        });
        setIsLoading(false);
        const teamMembers = await membersdata.json();
        setTeamMembers(teamMembers?.members);
        setMetaData(teamMembers?.metadata);

      }
    )()
  }, [page, location, title, area_of_focus]);

  return (
    <Layout header={pageTemplate} provider={provider}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <>
        <Section style={{ backgroundImage: `url(${pageResponse?.backgroundImage ? pageResponse.backgroundImage : ""})` }} className="our-professional">
          <Title className={'text-center'} type={'h2'}>{pageResponse?.title ? pageResponse.title : "Our Professional"}</Title>
          <div className="row">
            <div className="col-md-4 col-lg-3 mb-4">
              <h5 className='position-relative border-bottom border-1 pb-2'>Filter by: {(area_of_focus.toString() != "" || title != "" || location.toString() != "") ?
                <a href="#" className="position-absolute end-0 text-decoration-none fs-6 text-green" onClick={(e) => { window.location.reload() }}>Reset Filter</a> : ""
              }</h5>
              <div className="border-bottom border-1 pb-2 ">
                <input onChange={(e) => setTitle(e.target)} className="d-block ps-2 w-100 me-2 p-2 rounded-pill border-2" placeholder='Search by Keyword: name,tag..' />
              </div>
              <div className="accordion accordion-flush border-bottom shadow-reg " id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header bg-light-grey" id="flush-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <Title type={'h6'}>Location</Title>
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne">
                    <div className="accordion-body p-2">
                      <div className="accordion accordion-flush" id="accordionExample">
                        {pageResponse?.locations ? pageResponse.locations.map((location: any, index: any) => (
                          // <pre>{index}</pre>
                          <div key={index} className={"accordion-item"}>
                            <h2 className="accordion-header country" id={"heading" + index} >
                              <input className='position-absolute' type="checkbox" onChange={(e) => { setCountryArray(e.target) }} id={location.country_id} name={location.country_name} value={location.country_name.replace(/\s/g, "")} />
                              <button className="accordion-button collapsed ps-5" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="true" aria-controls="collapseOne">
                                {location.country_name}
                              </button>
                            </h2>
                            <div id={"collapse" + index} className={"accordion-collapse collapse"} aria-labelledby={"heading" + index} data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                {location?.state_data ? location.state_data.map((state: any, index: any) => (
                                  <li key={index} className="list-unstyled ms-3">
                                    <input className='me-3 state_input' type="checkbox" id={state.state_id} onChange={(e) => { setStateArray(e.target) }} name={state.state_name} value={state.state_name.replace(/\s/g, "")} />
                                    {state.state_name}
                                  </li>
                                )) : ""}
                              </div>
                            </div>
                          </div>
                        )) : ""}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header bg-light-grey" id="flush-headingTwo">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <Title type={'h6'}>Area of Focus</Title>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="flush-headingTwo">
                    <div className="accordion-body p-2">
                      {pageResponse?.area_of_focus ? pageResponse.area_of_focus.map((expertise: any, index: any) => (
                        <li key={index} className="list-unstyled ms-3">
                          <input className='me-3' type="checkbox" id={expertise.id} onChange={(e) => { setAreaOfFocusArray(e.target) }} name={expertise.title} value={expertise.title.replace(/\s/g, "")} />
                          {expertise.title}
                        </li>
                      )) : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-9">
              {isLoading ? (
                <div className="loader_api position-relative ">
                  <Loader />
                </div>
              ) : (
                <>
                  {
                    teamMembers
                      ? <Teams content={teamMembers} provider={provider} />
                      : <p className='lead'> Loading Team members... Please wait.  </p>
                  }
                </>
              )}
              {metaData?.total_pages > 1 ?
                    <>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                          {page > 1 ?
                            <li className={"page-item"}>
                              <Link className="page-link" href={''} onClick={() => setPage(page - 1)}>
                                Previous
                              </Link>
                            </li> :
                            <li className={"page-item disabled"}>
                              <Link className="page-link" href={''} onClick={() => setPage(page - 1)}>
                                Previous
                              </Link>
                            </li>

                          }
                          {pagesArray ? pagesArray.map((page: any, index: any) => (
                            <li key={index} className={activepage==(index+1)?"active page-item":""}><a className="page-link" href={"#page=" + (index + 1)} data-page={page} onClick={() => (setPage(index + 1), SetActivepage(index+1))}>{index + 1}</a></li>
                          )) : ""}
                          {pagesArray.length == page ?
                            <li className="page-item disabled">
                              <Link className="page-link" href={""} onClick={() => setPage(page + 1)}>
                                Next
                              </Link>
                            </li> :
                            <li className="page-item">
                              <Link className="page-link" href={""} onClick={() => setPage(page + 1)}>
                                Next
                              </Link>
                            </li>

                          }
                        </ul>
                      </nav>
                    </> : ""
                  }

            </div>
          </div>
        </Section>
      </>
    </Layout>
  )
}


export default OurProfessionals;

export async function getServerSideProps() {
  const pageResponse = (await ourProfessionalRouter(1, [], "", [])) ?? [];
  const meta = {
    currentPage: pageResponse?.data?.ourTeams?.metadata?.current_page ? pageResponse.data.ourTeams.metadata.current_page : 1,
    totalPage: pageResponse?.data?.ourTeams?.metadata?.total_pages ? pageResponse.data.ourTeams.metadata.total_pages : 1,
    totalResult: pageResponse?.data?.ourTeams?.metadata?.total_results ? pageResponse.data.ourTeams.metadata.total_results : 1
  }
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider
    }
  }
}

