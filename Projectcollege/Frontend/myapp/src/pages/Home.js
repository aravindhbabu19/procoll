import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiTick } from "react-icons/ti";
const Home = () => {
    const testimonials = [
    {
      img:'Images/College/test.jpg',
      quote: "Mounika Paramedical College gave me the perfect mix of theory and practical exposure. The clinical training at Renuka Multi-Specialty Hospital helped me gain real confidence while handling patients. Today, I feel job-ready and proud to be a part of this institution..",
      author: "J.Mamatha",
    },
    {
      img:'Images/College/test1.jpg',
      quote: "I chose this college because of its reputation for quality training. The guidance from experienced teachers and guest lectures like Dr. Radika’s sessions helped me broaden my knowledge. I am confident about building a successful career in healthcare.",
      author: "M.Mamatha",
    },
    {
      img:'Images/College/test2.jpg',
      quote: "The best part of this college is the supportive faculty and advanced labs. Every concept we learn in the classroom is demonstrated practically, which makes learning easy and effective. I’m now preparing for opportunities in leading diagnostic centers..",
      author: " Jahagir",
    }
  ];
   const [current, setCurrent] = useState(0);
   const goToSlide = (index) => {
      setCurrent(index);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  return (
    
    <div>
        <div class='home-div'>
          <div className=''>
          <h1 class='about-h d-flex justify-content-center'>Home</h1>
          </div>
        </div>
        <div class='home-background1'>
         <div class='container'>
          <div class='row mt-5'>
              <div class='col-12 col-sm-12 col-md-6 col-lg-6 home-col11'>
                <p>Mounika Paramedical College</p>
                <h1 class='home-l121'>EMPOWERING FUTURE HEALTHCARE <span class='home-span'>PROFESSIONALS</span></h1>
                <p class='home-span1'>QUALITY EDUCATION | PRACTICAL TRAINING | CAREER SUCCESS</p>
                <p class=''>Recognized Paramedical Institution</p> 
                <p>Job-Oriented Healthcare Programs</p>
                <p class='home-l1 mt-3'>At Mounika Paramedical College, we prepare students to excel in the medical and healthcare sector through industry-relevant training, experienced faculty, and hands-on clinical exposure.</p>
                <p class='home-l1'>We focus on building confident, skilled professionals who are ready to serve society with compassion and excellence.</p>
                <Link to='/Contact'>
                <button class='home-button123'>Apply Now</button>
                </Link>
                <Link to='/Courses'>
                <button class='home-button123 ms-5'>View Courses</button>
                </Link>
              </div>
              <div class='col-12 col-sm-12 col-md-6 col-lg-6 mt-5 home-col12'>
                <img src='./Images/College/image.jpg' height={515} class=' home-img1'/>
              </div>
          </div>
        </div>
        <div class='container'>
          <div class='row mt-5'>
              <div class='col-12 col-sm-12 col-md-6 col-lg-6 home-col11'>
                <h1 class='home-l'>Learn and Grow With Us</h1>
                <p class='home-l1 mt-3'>Mounika Paramedical College, approved by the AP State Allied Health Professions Council, is one of the most trusted institutions for paramedical education in South India. Since its establishment in 2022, the college has been committed to providing quality healthcare training through a blend of classroom learning, advanced labs, and real-world clinical exposure. With highly qualified faculty, modern infrastructure, and NABH-accredited hospital tie-ups, we prepare students to excel as skilled healthcare professionals.</p>
                <p>At Mounika Paramedical College, we emphasize practical learning, individual attention, and job-focused training. Our programs are designed to shape students into confident professionals ready to serve in hospitals, diagnostic centers, and community healthcare facilities. Guided by our vision “Vision follows knowledge,” we are building the next generation of compassionate, capable, and career-ready healthcare experts.</p>
              </div>
              <div class='col-12 col-sm-12 col-md-6 col-lg-6 mt-5 home-col12'>
                <img src='./Images/College/para3.jpg' height={395}  class=' home-img1'/>
              </div>
          </div>
        </div>
        <div class='container'>
          <div class='row mt-5'>
            <div class='col-12 col-sm-12 col-md-6 col-lg-6 home-col11 d-flex justify-content-center'>
              <img src='./Images/College/para1.jpg' alt='' height={395} class=' home-img1 mt-2'/>
            </div>
            <div class='col-12 col-sm-12 col-md-6 col-lg-6 mt-2 home-col12' >
              <h3 class='home-head5'>Building the Next Generation of Eye Care & Paramedical Professionals</h3>
              <p class='home-para5'> At Mounika Paramedical College, we combine academic excellence with real-world hospital exposure. With state-of-the-art labs, experienced faculty, and affiliation with Renuka Multi-Speciality Hospital, we ensure every student gains practical skills and career-ready confidence.</p>
              <h4 class='home-head5'>01 – Recognized & Approved</h4>
              <p class='home-para5'>Approved by AP State Allied Health Professions Council under the National Commission for Allied and Healthcare Professions Act.</p>
              <h4 class='home-head5'>02 – Hands-On Hospital Training</h4>
              <p class='home-para5'>Clinical exposure at Renuka Multi-Speciality Hospital (NABH-accredited) with advanced eye care, OT, and emergency care facilities.</p>
            </div>
          </div>
        </div>
        <div class='d-flex justify-content-center mt-5'>
          <h1 class='about-h1'>About the Course</h1>
        </div>
        <div class='container'>
                  <div class='row'>
                    <div class='col-12 col-sm-12 col-md-12 col-lg-6 home-col11'>
                     <img src='./Images/College/home1.jpg' alt=''  class='home-image rounded mt-5' /> 
                     {/* <img src='./Images/College/oppor.jpg' alt=''   class='home-image rounded mt-4' />    */}
                    </div>
                    <div class='col-12 col-sm-12 col-md-12 col-lg-6 home-col12'>
                      <p class='about-p1 mt-5'>This course provides a strong foundation in eye care and vision sciences, combining both theoretical knowledge and practical skills. Students gain a comprehensive understanding of the basics of glasses and prescriptions, the structure and functions of the eye, and common eye diseases along with their treatment methods. Beyond academic learning, the program also opens doors to a wide range of career opportunities across healthcare, the optical industry, community health services, and entrepreneurial ventures, preparing students for a successful and impactful career in vision care.</p>
                      <h4 class='about-p123 '>Career Opportunities in Eye Care & Vision Health</h4>
                      <p>A career in eye care and vision health offers diverse opportunities across multiple sectors, allowing graduates to choose paths that match their interests and skills.</p>
                      <p>In Clinical and Hospital Careers, students can begin as Patient Care Assistants (OPD/OT), supporting doctors and patients in hospitals. They can also work as OT Technicians or Surgical Assistants in ophthalmic and orthopedic surgeries. With experience, roles such as Hospital Administrator, Duty Manager, Store & Inventory Manager, or even Hospital Manager open up, focusing on operations, staff management, and patient services.</p>
                      <p>In the Optical and Fashion Industry, professionals can become Optical Sales Executives in branded showrooms or Fashion Eyewear Consultants, helping customers find eyewear that blends style with vision needs. For those with entrepreneurial ambitions, owning an independent optical business offers both independence and growth.</p>
                      <p>The NGO and Community Health sector provides meaningful roles such as Community Field Worker, Vision Care Motivator, or Program Coordinator/Manager focused on spreading eye health awareness, conducting screening camps, and managing outreach programs.</p>
                      <p>For those interested in Self-Employment and Entrepreneurship, opportunities include setting up independent optical stores, starting small eye care centers in partnership with doctors, or offering mobile vision care services to rural and underserved areas.</p>
                      <p>In the Manufacturing and Wholesale Industry, entry-level positions include lens manufacturing technicians, frame assembly workers, and quality control assistants. With growth and experience, one can progress to roles like production supervisor, lens or frame designer, and wholesale sales executive. Leadership roles include factory or plant manager, brand owner, and wholesale business owner ideal for those aiming to lead in large-scale optical manufacturing and distribution.</p>
                      <Link class='text-decoration-none text-dark' to={'/Courses'}>
                      <button class='about-button'>Explore Courses</button>
                      </Link>
                    </div>
                  </div>
        </div>
        <div class='d-flex justify-content-center mt-5'>
          <h1 class='about-h1'>🎓 OUR ADMISSION PROCESS</h1>
        </div>
        <div class='container'>
                  <div class='row'>
                    <div class='col-12 col-sm-12 col-md-12 col-lg-6 home-col11'>
                     <img src='./Images/College/admiss.jpg' alt=''  class='home-image23 rounded mt-5' /> 
                    </div>
                    <div class='col-12 col-sm-12 col-md-12 col-lg-6 home-col12'>
                      <h4 class='about-p123 mt-5'>FROM ENQUIRY TO ENROLLMENT — A SMOOTH JOURNEY TO YOUR PARAMEDICAL CAREER</h4>
                      <p class='about-p1 mt-1'>At Mounika Paramedical College, we make your admission journey simple and transparent.</p>                    
                      <p class='about-p1 mt-1'>From the moment you enquire to your first day on campus, our dedicated team supports you every step of the way ensuring a smooth, stress-free process for all aspiring healthcare professionals.</p>
                      <h2 class='about-p123 mt-1'>1. Enquiry and Counselling</h2>
                      <p class='about-p1 mt-1'>📞 We guide you from the start.</p>
                      <p class='about-p1 mt-1'>Our admission counsellors provide complete information about courses, eligibility, and career opportunities. You’ll receive personalized guidance to help you choose the right program that matches your goals.</p>
                      <h2 class='about-p123 mt-1'>2. Application and Document Submission</h2>
                      <p class='about-p1 mt-1'>🗂 Simple, clear, and quick.</p>
                      <p class='about-p1 mt-1'>Submit your application form along with the required academic and identification documents. Our team reviews your details carefully to ensure all requirements are met..</p>
                      <h2 class='about-p123 mt-1'>3. Admission Confirmation</h2>
                      <p class='about-p1 mt-1'>✅ Your seat is secured.</p>
                      <p class='about-p1 mt-1'>Once your documents are verified and eligibility confirmed, you’ll receive your admission confirmation letter and fee payment details. Our staff will guide you through every step of the process.</p>
                      <h2 class='about-p123 mt-1'>4. Orientation and Course Commencement</h2>
                      <p class='about-p1 mt-1'>🎓 Begin your journey in healthcare.</p>
                      <p class='about-p1 mt-1'>Attend the orientation program to get introduced to faculty, facilities, and your curriculum. Then, step confidently into your classes and practical training sessions.</p>
                    </div>
                  </div>
        </div>
        <div class='d-flex justify-content-center mt-5'>
          <h1 class='about-h1'>Why You Should Join Mounika Paramedical College for Your Future</h1>
        </div>
        <div class='container'>
          <p class='home-choose mt-3'>Mounika Paramedical College is the ideal destination for students aspiring to build a strong and successful career in the healthcare industry. We are committed to providing high-quality, career-focused education that blends theoretical knowledge with practical training. Our government-recognized programs are designed to meet the growing demand for skilled healthcare professionals, ensuring that every student is job-ready upon completion.With a team of experienced faculty and tie-ups with reputed hospitals and diagnostic centers, students gain valuable hands-on clinical exposure and real-world experience. The college is equipped with modern infrastructure, advanced laboratories, and up-to-date medical equipment to create a professional learning environment. We also offer affordable fees and scholarship opportunities, making quality paramedical education accessible to all deserving students.Beyond academics, Mounika Paramedical College focuses on personality development, communication skills, and career guidance to help students grow with confidence and professionalism. Our dedicated placement support connects graduates with leading healthcare organizations, ensuring a smooth transition from classroom to career. Joining Mounika Paramedical College means investing in a brighter, more secure, and meaningful future in the field of healthcare.
</p>
        </div>
        <div class='home-test'>
      <h2 class='home-what mt-5 '>Student Testimonial</h2>
     <div className="testimonial-slider">
      <div className="slides" style={{ transform: `translateX(-${current * 100}%)` }}>
        {testimonials.map((t, index) => (
          <div className="slide" key={index}>
            <img src={t.img} alt='1' height={150} width={170} class='test-ho rounded'/>
            <p class='mt-3'>"{t.quote}"</p>
            <h4>- {t.author}</h4>
          </div>
        ))}
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
        </div>
         <Link class='text-decoration-none d-flex justify-content-center mt-3 text-dark' to={'/Contact'}>
           <button class='about-button'>Start Your Journey</button>
         </Link>
         </div>
    </div>
  )
}

export default Home