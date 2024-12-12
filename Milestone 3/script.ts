// get refrence to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement ;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// handle form submission
form.addEventListener('submit', (event:Event) => {
    event.preventDefault();  // prevent page reload

    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // generate the resume content dynamically
    const resumehtml = `
    <h2><b>Resume</h2></b>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h3>Education</h3>
    <p>${education}

     <h3>Experience</h3>
    <p>${experience}

     <h3>Skills</h3>
    <p>${skills}
    `;

    // display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else{
        console.error('The resume display element is missing.')
    }
})