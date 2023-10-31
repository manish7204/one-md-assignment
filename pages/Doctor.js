
const apiUrl = 'http://localhost:3000/users';

let start = 0;
let limit = 5;

function fetchCrad(start, limit) {
    fetch(`${apiUrl}?_start=${start}&_limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.Container');
            console.log(data)

            data.forEach(doctor => {
                console.log(doctor)
                const card = document.createElement('div');
                card.classList.add('cards');

                const graduationYear = new Date(doctor.dateOfGraduation).getFullYear();
                const cureentdate = new Date().getFullYear();

                const Experience = cureentdate - graduationYear;
                card.innerHTML = `
                    <div class="img">
                        <img class="ProfilePic" id="profile"  alt="Profile Picture" src="assets/avatar.png"
                        >
                        <p id="pTag">Experience</p>
                        <p id="pTag">${Experience}</p>
                    </div>
                    <div class="otherInfo">
                        <h2>Dr.${doctor.fullName}</h2>
                        <p> ${doctor.degreeOne} , ${doctor.degrees}</p>
                        <p>Next Slot:11 AM</p>
                    </div>
                    <div class="fess">
                        <h3>Fees</h3>
                        <p>Online Consultation: ${doctor.onlineFee}</p>
                        <p>In-Person Consultation: ${doctor.inPersonFee}</p>
                        <span><button class="bookBtn">Book Appointment</button></span>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function loadData() {
    start += limit;
     fetchCrad(start, limit);
    console.log("clickkkkkkkk");
}

loadData();