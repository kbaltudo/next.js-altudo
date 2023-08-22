import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { getAuthorRouter, getUpdatedAuthorRouter, } from "../../lib/provider/mapper";
import Image from "next/image";
import Styles from "./Blog.module.scss";
import Description from "../../components/Elements/Description";
import SocialShare from "../../components/Composits/Cards/Card/SocialShare/SocialShare";
import Layout2 from "../../components/PageStructure/Container/LayoutWithoutFooter";
import Footer from "../../components/PageStructure/Footer/Footer";
import Loader from "../../components/PageContent/Loader/Loader";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import { getCookie } from 'cookies-next';

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import Modal from './Modal';

interface Experience {
  field_profile: string;
  field_organisation: string;
  field_objective: string;
  field_start_date: string;
  field_end_date: string;
}
const initialExperience: Experience = {
  field_profile: '',
  field_organisation: '',
  field_objective: '',
  field_start_date: '',
  field_end_date: ''
};
interface Education {
  field_institute: string;
  field_course: string;
  field_stream: string;
  field_result: string;
  field_start_date: string;
  field_end_date: string;
}
const initialEducation: Education = {
  field_institute: '',
  field_course: '',
  field_stream: '',
  field_result: '',
  field_start_date: '',
  field_end_date: '',
}

interface Focus {
  name: string;
}
const initialFocus: Focus = {
  name: ''
}

function AuthorDetails(props: any) {
  const [title, setTitle] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [facebooklink, setFacebooklink] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [award, setAward] = useState<string>("");
  const [twiterlink, setTwiterlink] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const { pagetemplate, author, params, provider, authorId } = props;
  const drupalData = author;
  const [experience, setExperience] = useState<Experience[]>([initialExperience]);
  const [education, setEducation] = useState<Education[]>([initialEducation]);
  const [focus, setFocus] = useState<Focus[]>([initialFocus]);
  const [awards, setAwards] = useState<string[]>([]);

  useEffect(() => {
    setExperience(drupalData?.field_experience?.items);
    setEducation(drupalData?.field_education?.items);
    setFocus(drupalData?.field_area_of_focus?.items);
    setInterest(drupalData?.field_interest);
    setAwards(drupalData?.field_awards)
  }, []);

  // Check if user is logged in
  let isLoggedIn = getCookie('logged');

  // Update form data
  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatebio = {
      data: {
        title: title,
        body: body,
        field_designation: designation,
        field_email: email,
        field_twiterlink: twiterlink,
        field_linkedin: linkedin,
        field_facebooklink: facebooklink,
        field_organization: organization,
        field_interest: interest,
        field_awards: award,
        // field_experience: experience
      },
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/our-professionals/bio-update?authorId=${authorId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatebio),
        }
      );
      const resData = await response.json();
      let apiStatus = response.status;
      if (apiStatus === 200) {
        Swal.fire({
          icon: "success",
          text: "Data Updated Successfully",
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "error",
          timer: 1500,
        });
      }
      if (undefined == resData) {
      } else {
        setTitle("");
        setDesignation("");
        setEmail("");
        setFacebooklink("");
        setTwiterlink("");
        setLinkedin("");
        setOrganization("");
        setInterest("");
        setAward("");
        setIsLoading(false);
        setTimeout(window.location.reload.bind(window.location), 500);
      }
    } catch (error: any) { }
  };
  const handleChange = (e: any) => {
    if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "organization") {
      setOrganization(e.target.value);
    } else if (e.target.name == "designation") {
      setDesignation(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "facebooklink") {
      setFacebooklink(e.target.value);
    } else if (e.target.name == "twiterlink") {
      setTwiterlink(e.target.value);
    } else if (e.target.name == "linkedin") {
      setLinkedin(e.target.value);
    } else if (e.target.name == "description") {
      setBody(e.target.value);
    } else if (e.target.name == "interest") {
      setInterest(e.target.value);
    } else if (e.target.name == "award") {
      setAward(e.target.value);
    }
  };
  const getValue = (e: any) => {
    const titlevalue = e.target.value;
    setTitle(titlevalue);
    const orgvalue = e.target.value;
    setTitle(orgvalue);
    const designationvalue = e.target.value;
    setDesignation(designationvalue);
    const emailvalue = e.target.value;
    setEmail(emailvalue);
    const facebookvalue = e.target.value;
    setFacebooklink(facebookvalue);
    const twittervalue = e.target.value;
    setTwiterlink(twittervalue);
    const linkedinvalue = e.target.value;
    setLinkedin(linkedinvalue);
    const bodyvalue = e.target.value;
    setBody(bodyvalue);
  }
  const address =
    (drupalData?.field_location?.items?.field_address1
      ? drupalData.field_location.items.field_address1 + ", "
      : "") +
    (drupalData?.field_location?.items?.state_name
      ? drupalData?.field_location.items.state_name + ", "
      : "") +
    (drupalData?.field_location?.items?.country_name
      ? drupalData?.field_location.items.country_name + ".  "
      : "");
  // Update Experience/Education Data
  const addExperience = () => {
    setExperience([...experience, initialExperience]);
  }
  const removeExperience = (index: number) => {
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setExperience(newExperience);
  }
  const addEducation = () => {
    setEducation([...education, initialEducation]);
  }
  const removeEducation = (index: number) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  }
  const addFocus = () => {
    setFocus([...focus, initialFocus])
  }
  const removeFocus = (index: number) => {
    const newFocus = [...focus];
    newFocus.splice(index, 1);
    setFocus(newFocus);
  }
  const addAward = () => {
    const newAward = [...awards].concat([]);
    newAward.push(" ");
    setAwards(newAward);
  }
  const removeAward = (index: number) => {
    const newAward = [...awards];
    newAward.splice(index, 1);
    setAwards(newAward);
  }
  const handleChangeField = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const { name, value } = event.target;
    if (field === "experience") {
      const newExperience = [...experience];
      newExperience[index] = {
        ...newExperience[index],
        [name]: value,
      };
      setExperience(newExperience);
    } else if (field === "focus") {
      const newFocus = [...focus];
      newFocus[index] = {
        ...newFocus[index],
        [name]: value,
      };
      setFocus(newFocus);
    }
    else if (field === "awards") {
      const newAwards = [...awards];
      newAwards[index] = value
      setAwards(newAwards);
    }
    else {
      const newEducation = [...education];
      newEducation[index] = {
        ...newEducation[index],
        [name]: value,
      };
      setEducation(newEducation);
    }
  };

  const handleChangeEditor = (index: number, value: string, name: string) => {
    const newExperience = [...experience];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };
    setExperience(newExperience);
  }

  const handleChangeInput = (value: string, field: string) => {
    if (field === "Interest") {
      setInterest(value);
    } else if (field === "Description") {
      setBody(value)
    }
  }

  // FOR EXPRIENCE
  const handleSubmitExp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updateExprience = {
      data: {
        field_experience: {
          items: experience,
          type: "entity_reference_revisions"
        }
      }
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/our-professionals/bio-update?authorId=${authorId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateExprience),
        }
      );
      const dataExprience = await response.json();
      let apiStatusExprience = response.status;

      if (apiStatusExprience === 200) {
        setExperience(dataExprience.data.field_experience?.items);
        Swal.fire({
          icon: "success",
          text: "Data Updated Successfully",
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "error",
          timer: 1500,
        });
      }
      if (undefined == dataExprience) {
      } else {
        setIsLoading(false);
        setTimeout(window.location.reload.bind(window.location), 500);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // FOR EDUCATION
  const handleSubmitEduc = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updateEducation = {
      data: {
        field_education: {
          items: education,
          type: "entity_reference_revisions"
        }
      }
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/our-professionals/bio-update?authorId=${authorId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateEducation),
        }
      );
      const dataEducation = await response.json();

      let apiStatusEducation = response.status;

      if (apiStatusEducation === 200) {
        setEducation(dataEducation.data.field_education?.items);
        Swal.fire({
          icon: "success",
          text: "Data Updated Successfully",
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "error",
          timer: 1500,
        });
      }
      if (undefined == dataEducation) {
      } else {
        setIsLoading(false);
        setTimeout(window.location.reload.bind(window.location), 500);
      }

    } catch (error) {
      console.error(error);
    }

  }

  //FOR AREA OF FOCUS
  const handleSubmitFocus = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updateFocus = {
      data: {
        field_area_of_focus: {
          items: focus,
          type: "entity_reference"
        }
      }
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/our-professionals/bio-update?authorId=${authorId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateFocus),
        }
      );
      const dataFocus = await response.json();

      let apiStatusFocus = response.status;

      if (apiStatusFocus === 200) {
        setFocus(dataFocus.data.field_area_of_focus?.items);
        Swal.fire({
          icon: "success",
          text: "Data Updated Successfully",
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "error",
          timer: 1500,
        });
      }
      if (undefined == dataFocus) {
      } else {
        setIsLoading(false);
        setTimeout(window.location.reload.bind(window.location), 500);
      }

    } catch (error) {
      console.error(error);
    }
  }

  // For INTEREST
  const handleSubmitInterest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updateInterest = {
      data: {
        field_interest: interest
      }
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/our-professionals/bio-update?authorId=${authorId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateInterest),
        }
      );
      const dataInterest = await response.json();
      let apiStatusInterest = response.status;

      if (apiStatusInterest === 200) {
        setInterest(dataInterest.data.field_interest);
        Swal.fire({
          icon: "success",
          text: "Data Updated Successfully",
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "error",
          timer: 1500,
        });
      }
      if (undefined == dataInterest) {
      } else {
        setIsLoading(false);
        setTimeout(window.location.reload.bind(window.location), 500);
      }

    } catch (error) {
      console.error(error);
    }
  }

  // FOR AWARDS
  const handleSubmitAwards = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updateAwards = {
      data: {
        field_awards: awards
      }
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/our-professionals/bio-update?authorId=${authorId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateAwards),
        }
      );
      const dataAwards = await response.json();
      let apiStatusExprience = response.status;

      if (apiStatusExprience === 200) {
        setAward(dataAwards.data.field_awards);
        Swal.fire({
          icon: "success",
          text: "Data Updated Successfully",
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "error",
          timer: 1500,
        });
      }
      if (undefined == dataAwards) {
      } else {
        setIsLoading(false);
        setTimeout(window.location.reload.bind(window.location), 500);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout2 header={pagetemplate} provider={provider}>
      <Head><title>{drupalData?.title}</title></Head>
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark d-none d-lg-flex" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">{drupalData?.title}</span>
            <span className="d-none d-lg-block">
              <Image className="img-fluid img-profile rounded-circle mx-auto mb-2" src={drupalData?.field_bio_image?.image_url} height={400} width={400} alt="..." />
            </span>
          </a>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#page-top">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">Expertise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="p-2 position-fixed-select">
          <select
            className="form-select d-lg-none" aria-label="Default select example">
            <option className="nav-item" value={"page-top"}>{drupalData?.title}</option>
            <option className="nav-item" value={"About"}>About</option>
            <option className="nav-item" value={"experience"}>Experience</option>
            <option className="nav-item" value={"education"}>Education</option>
            <option className="nav-item" value={"skills"}>Expertise</option>
            <option className="nav-item" value={"interests"}>Interests</option>
            <option className="nav-item" value={"awards"}>Awards</option>
          </select>
        </div>
        <div className="container-fluid p-0 main-section">
          {/* <!-- About--> */}
          <section className="resume-section" id="About">
            <div className="resume-section-content">{isLoading ? <Loader /> : ""}
              <div
                className={Styles.updatebiobtn + " d-flex justify-content-between mb-3"}>
                <h1 className="text-uppercase">{drupalData?.title}</h1>
                {isLoggedIn && <button type="button" className={"btn edit me-3 pt-0 "} data-bs-toggle="modal" data-bs-target="#aboutModal"><FontAwesomeIcon icon={faEdit} /></button>}
              </div>
              <h3 className="text-uppercase">
                {drupalData?.field_designation}
              </h3>
              <div className="subheading mb-5">
                {address}
                <blockquote id="email">
                  <a href={"mailto:" + drupalData?.field_email}>{drupalData?.field_email}</a>
                </blockquote>
              </div>
              <Description id="body" className={"lead mb-5"}>{drupalData?.body?.value}</Description>
              <div className="social-icons">
                <SocialShare content={drupalData?.field_social_links} provider={"drupal"} />
              </div>
            </div>
            {/* ABOUT FORM */}
            <form onSubmit={handlePost}>
              <Modal id="aboutModal" title="Edit Details" buttons={[]}>
                <div className={`modal-body ${drupalData ? Styles.modal_scroll : ""}`}>
                  <div className="row">
                    <div className="col-md-6 col-lg-4  mb-3">
                      <label htmlFor="title" className="">Title</label>
                      <input onChange={handleChange} onLoad={getValue} name="title" type="text" className="form-control" aria-describedby="emailHelp" defaultValue={drupalData?.title} />
                    </div>
                    <div className="col-md-6 col-lg-4  mb-3">
                      <label htmlFor="designation">Designation</label>
                      <input onChange={handleChange} onLoad={getValue} name="designation" type="text" className="form-control" aria-describedby="emailHelp" value={drupalData?.field_designation} />
                    </div>
                    <div className="col-md-6 col-lg-4  mb-3">
                      <label htmlFor="email" className="">Email</label>
                      <input onChange={handleChange} onLoad={getValue} type="text" className="form-control" name="email" aria-describedby="emailHelp" defaultValue={drupalData?.field_email} />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="description">Description</label>
                      <JoditEditor ref={editor} value={drupalData?.body.value} onChange={value => handleChangeInput(value, "Description")} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-4  mb-3">
                      <label htmlFor="twiterlink" className="">Twitter Link</label>
                      <input onChange={handleChange} onLoad={getValue} type="text" className="form-control" name="twiterlink" aria-describedby="emailHelp" defaultValue={drupalData?.field_twiterlink} />
                    </div>
                    <div className="col-md-6 col-lg-4  mb-3">
                      <label htmlFor="linkedin" className="">LinkedIn Link</label>
                      <input onChange={handleChange} onLoad={getValue} type="text" className="form-control" name="linkedin" aria-describedby="emailHelp" defaultValue={drupalData?.field_linkedin} />
                    </div>
                    <div className="col-md-6 col-lg-4  mb-3">
                      <label htmlFor="facebook" className="">Facebook Link</label>
                      <input onChange={handleChange} onLoad={getValue} type="text" className="form-control" name="facebook" aria-describedby="emailHelp" defaultValue={drupalData?.field_facebooklink} />
                    </div>
                  </div>
                </div>
              </Modal>
            </form>
          </section>
          <hr className="m-0" />
          {/* <!-- Experience--> */}
          <section className="resume-section" id="experience">
            <div className="resume-section-content">
              <div
                className={Styles.updatebiobtn + " d-flex justify-content-between mb-3"}>
                <h2 className="">Experience</h2>
                {isLoggedIn && <button type="button" className={"btn edit me-3 pt-0 "} data-bs-toggle="modal" data-bs-target="#experienceModal"> <FontAwesomeIcon icon={faEdit} /></button>}
              </div>
              {drupalData?.field_experience?.items ? drupalData?.field_experience.items.map((experience: any, index: any) => (
                <div
                  key={index}
                  className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">{experience.field_profile}</h3>
                    <div className="subheading mb-3">{experience.field_organisation}</div>
                    <Description>{experience.field_objective}</Description>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary fw-bolder">
                      {experience.field_start_date + " - " + experience.field_end_date}
                    </span>
                  </div>
                </div>
              )
              ) : ""}
            </div>
            {/* EXPERIENCE FORM */}
            <form onSubmit={handleSubmitExp}>
              <Modal id="experienceModal" title="Edit Details" buttons={[
                { label: "Add Experience", onClick: addExperience, show: true }
              ]}
              >
                <div className={(experience?.length > 0 ? Styles.modal_scroll : "") + " modal-body"}>
                  {experience?.map((exp: Experience, index: number) => (
                    <div key={index} className="mb-3">
                      <div className="row">
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`profile-${index}`}>Profile</label>
                          <input id={`profile-${index}`} onChange={(event) => handleChangeField(index, event, "experience")} name="field_profile" type="text" className="form-control" value={exp.field_profile} />
                        </div>
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`organisation-${index}`}>Organisation</label>
                          <input id={`organisation-${index}`} onChange={(event) => handleChangeField(index, event, "experience")} name="field_organisation" type="text" className="form-control" value={exp.field_organisation} />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label htmlFor={`objective-${index}`}>Objective</label>
                          <JoditEditor ref={editor} value={exp.field_objective} onChange={value => handleChangeEditor(index, value, "field_objective")} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`startDate-${index}`}>Start Date</label>
                          <input id={`startDate-${index}`} onChange={(event) => handleChangeField(index, event, "experience")} name="field_start_date" type="text" className="form-control" value={exp.field_start_date} />
                        </div>
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`endDate-${index}`}>End Date</label>
                          <input id={`endDate-${index}`} onChange={(event) => handleChangeField(index, event, "experience")} name="field_end_date" type="text" className="form-control" value={exp.field_end_date} />
                        </div>
                      </div>
                      {index > 0 && (
                        <div className="mt-3 d-flex justify-content-end">
                          <button type="button" className="btn btn-primary" onClick={() => removeExperience(index)}>Remove Experience</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Modal>
            </form>
          </section>
          <hr className="m-0" />
          {/* <!-- Education--> */}
          <section className="resume-section" id="education">
            <div className="resume-section-content">
              <div
                className={Styles.updatebiobtn + " d-flex justify-content-between mb-3"}>
                <h2 className="">Education</h2>
                {isLoggedIn && <button type="button" className={"btn edit me-3 pt-0 "} data-bs-toggle="modal" data-bs-target="#educationModal"> <FontAwesomeIcon icon={faEdit} /></button>}
              </div>
              {drupalData?.field_education?.items ? drupalData?.field_education.items.map((education: any, index: any) => (
                <div
                  key={index}
                  className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">{education.field_institute}</h3>
                    <div className="subheading mb-3">{education.field_course}</div>
                    <div><strong>BRANCH/STREAM : </strong>{education.field_stream}</div>
                    <p><strong>CGPA/GRADE : </strong>{education.field_result}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary fw-bolder">
                      {education.field_start_date + " - " + education.field_end_date}
                    </span>
                  </div>
                </div>
              )) : ""}
            </div>
            {/* EDUCATION FORM */}
            <form onSubmit={handleSubmitEduc}>
              <Modal id="educationModal" title="Edit Details" buttons={[
                { label: "Add Education", onClick: addEducation, show: true }
              ]}>
                <div className={`modal-body ${education && education.length > 0 ? Styles.modal_scroll : ""}`}>
                  {education?.map((edu: Education, index: number) => (
                    <div key={index} className="mb-3">
                      <div className="row">
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`institute-${index}`}>Institute</label>
                          <input id={`institute-${index}`} onChange={(event) => handleChangeField(index, event, "education")} name="field_institute" type="text" className="form-control" value={edu.field_institute} />
                        </div>
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`course-${index}`}>Course</label>
                          <input id={`course-${index}`} onChange={(event) => handleChangeField(index, event, "education")} name="field_course" type="text" className="form-control" value={edu.field_course} />
                        </div>
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`stream-${index}`}>Stream</label>
                          <input id={`stream-${index}`} onChange={(event) => handleChangeField(index, event, "education")} name="field_stream" type="text" className="form-control" value={edu.field_stream} />
                        </div>
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`result-${index}`}>Result</label>
                          <input id={`result-${index}`} onChange={(event) => handleChangeField(index, event, "education")} name="field_result" type="text" className="form-control" value={edu.field_result} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`startDate-${index}`}>Start Date</label>
                          <input id={`startDate-${index}`} onChange={(event) => handleChangeField(index, event, "education")} name="field_start_date" type="text" className="form-control" value={edu.field_start_date} />
                        </div>
                        <div className="col-md-6 col-lg-4  mb-3">
                          <label htmlFor={`endDate-${index}`}>End Date</label>
                          <input id={`endDate-${index}`} onChange={(event) => handleChangeField(index, event, "education")} name="field_end_date" type="text" className="form-control" value={edu.field_end_date} />
                        </div>
                      </div>
                      {index > 0 && (
                        <div className="mt-3 d-flex justify-content-end">
                          <button type="button" className="btn btn-primary" onClick={() => removeEducation(index)}>Remove Education</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Modal>
            </form>
          </section>
          <hr className="m-0" />
          {/* <!-- Skills--> */}
          <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <div
                className={Styles.updatebiobtn + " d-flex justify-content-between mb-3"}>
                <h2 className="">Area of Focus</h2>
                {isLoggedIn && <button type="button" className={"btn edit me-3 pt-0 "} data-bs-toggle="modal" data-bs-target="#skillModal"> <FontAwesomeIcon icon={faEdit} /></button>}
              </div>
              <ul className="fa-ul mb-0">{drupalData?.field_area_of_focus?.items ? drupalData?.field_area_of_focus.items.map((focus: any, index: any) => (
                <li key={index}>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {focus.name}
                </li>
              )) : ""}
              </ul>
            </div>

            {/* AREA OF FOCUS FORM */}
            <form onSubmit={handleSubmitFocus}>
              <Modal id="skillModal" title="Edit Details" buttons={[
                { label: "Add Focus", onClick: addFocus, show: true }
              ]}>
                <div className={(focus?.length > 0 ? Styles.modal_scroll : "") + " modal-body"}>
                  {focus?.map((focus: Focus, index: number) => (
                    <div key={index} className="mb-3">
                      <div className="row">
                        <div className="col-md-4">
                          <label htmlFor="focus">Area of Focus {index + 1}</label>
                          <input id={`focus-${index}`} onChange={(event) => handleChangeField(index, event, "focus")} name="name" type="text" className="form-control" value={focus.name} />
                          {index > 1 && (
                            <div className="mt-3 d-flex justify-content-end">
                              <button type="button" className="btn btn-primary" onClick={() => removeFocus(index)}>Remove Focus</button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Modal>
            </form>
          </section>
          <hr className="m-0" />
          {/* <!-- Interests--> */}
          <section className="resume-section" id="interests">
            <div className="resume-section-content">
              <div
                className={Styles.updatebiobtn + " d-flex justify-content-between mb-3"}>
                <h2 className="">Interest</h2>
                {isLoggedIn && <button type="button" className={"btn edit me-3 pt-0 "} data-bs-toggle="modal" data-bs-target="#interestModal"> <FontAwesomeIcon icon={faEdit} /></button>}
              </div>
              <Description id="interest" className="w-75">
                {drupalData?.field_interest}
              </Description>
            </div>
            {/* Interest Form */}
            <form onSubmit={handleSubmitInterest}>
              <Modal id="interestModal" title="Edit Details" buttons={[]}>
                <label htmlFor="interest" className="">Interest</label>
                <JoditEditor ref={editor} value={drupalData?.field_interest} onChange={value => handleChangeInput(value, "Interest")} />
              </Modal>
            </form>
          </section>
          <hr className="m-0" />
          {/* <!-- Awards--> */}
          <section className="resume-section" id="awards">
            <div className="resume-section-content">
              <div
                className={Styles.updatebiobtn + " d-flex justify-content-between mb-3"}>
                <h2 className="">Awards and Certifications</h2>
                {isLoggedIn && <button type="button" className={"btn edit me-3 pt-0 "} data-bs-toggle="modal" data-bs-target="#awardModal"> <FontAwesomeIcon icon={faEdit} /></button>}
              </div>
              <ul className="fa-ul mb-0">
                {drupalData?.field_awards ? drupalData?.field_awards.map((award: any, index: any) => (
                  <li key={index}>
                    <span className="fa-li">
                      <i className="fas fa-trophy text-warning"></i>
                    </span>
                    {award}
                  </li>
                )) : ""}
              </ul>
            </div>
            {/* Awards Form */}
            <form onSubmit={handleSubmitAwards}>
              <Modal id="awardModal" title="Edit Details" buttons={[
                { label: "Add Award", onClick: addAward, show: true }
              ]}>
                <div className={(awards?.length > 0 ? Styles.modal_scroll : "") + " modal-body"}>
                  {awards?.map((award: any, index: number) => (
                    <div key={index} className="mb-3">
                      <label htmlFor="award">Awards {index + 1}</label>
                      <textarea id={`award-${index}`} onChange={(event) => handleChangeField(index, event, "awards")} onLoad={getValue} name="award" className="form-control" aria-describedby="emailHelp" value={award}> </textarea>
                      {index > 1 && (
                        <div className="mt-3 d-flex justify-content-end">
                          <button type="button" className="btn btn-primary" onClick={() => removeAward(index)}>Remove Awards</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Modal>
            </form>
          </section>
          <hr className="m-0" />
          <footer className="footer-bio">
            <Footer content={pagetemplate} provider={provider}></Footer>
          </footer>
        </div>
      </>
    </Layout2>
  );
}
export default AuthorDetails;
export async function getServerSideProps({ params }: any) {
  const { slug } = params;
  let data: any = null;
  data = await getAuthorRouter(slug);
  // 404 if we does not found the data in API response
  if (null === data.data) {
    return {
      notFound: true,
    };
  }
  const apiData = data.data.ourTeams[0].self.split("/");
  const dataID = apiData[apiData.length - 1];
  const updatedData = await getUpdatedAuthorRouter(dataID);
  return {
    props: {
      authorId: dataID,
      author: updatedData?.data?.bioDetails,
      pagetemplate: updatedData.pagetemplate,
    },
  };
}
