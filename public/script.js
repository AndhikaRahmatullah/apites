// methode date (tanggal)
const tgl = document.querySelector(`#tgl`);
const tgl2 = document.querySelector(`#tgl2`);
let waktu = () => {
	let months = ['Januari', 'Februari', 'Maret', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
	let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu']

	let date = new Date();
	let t = date.getDate(),
		h = date.getDay(),
		b = date.getMonth(),
		year = date.getYear();
	h = days[h];
	b = months[b];
	let th = (year < 1000) ? year + 1900 : year;

	return `${h}, ${t} ${b} ${th}`
}
tgl.innerHTML = waktu();
tgl2.innerHTML = waktu();

// method date (jam)
let jam = document.querySelector(`#jam`);
let jam2 = document.querySelector(`#jam2`);
function timeShow() {
	let a_p = "";
	let today = new Date();
	let curr_hour = today.getHours();
	let curr_minute = today.getMinutes();
	let curr_second = today.getSeconds();
	if (curr_hour < 12) {
		a_p = "AM";
	} else {
		a_p = "PM";
	}
	if (curr_hour == 0) {
		curr_hour = 12;
	}
	if (curr_hour > 12) {
		curr_hour = curr_hour - 12;
	}
	curr_hour = checkTime(curr_hour);
	curr_minute = checkTime(curr_minute);
	curr_second = checkTime(curr_second);

	jam.innerHTML = curr_hour + ":" + curr_minute + ":" + curr_second + " " + a_p;
	jam2.innerHTML = curr_hour + ":" + curr_minute + ":" + curr_second + " " + a_p;
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
setInterval(timeShow, 500);

// event show navbar-sm
const hamburger = document.querySelector(`#hamburger`);
hamburger.addEventListener('click', () => {
	const nsm = document.querySelector(`#navbar-sm`);
	const nsml = document.querySelector(`#navbar-sm-line`);
	nsml.classList.toggle('hidden');
	nsm.classList.toggle('hidden');
	nsm.classList.toggle('grid');
});

// event change date to time (for md screen)
const chg = document.querySelector(`#chg`);
chg.addEventListener('mouseenter', () => {
	const jam = document.querySelector(`#jam`);
	const tgl = document.querySelector(`#tgl`);
	jam.classList.toggle('hidden');
	tgl.classList.toggle('hidden');
})
chg.addEventListener('mouseleave', () => {
	const jam = document.querySelector(`#jam`);
	const tgl = document.querySelector(`#tgl`);
	jam.classList.add('hidden');
	tgl.classList.remove('hidden');
})
// event change date to time (for sm screen)
const chg2 = document.querySelector(`#chg2`);
chg2.addEventListener('click', () => {
	const jam2 = document.querySelector(`#jam2`);
	const tgl2 = document.querySelector(`#tgl2`);
	jam2.classList.toggle('hidden');
	tgl2.classList.toggle('hidden');
})


// event search
const cari = document.querySelector(`#cari`);
cari.addEventListener("click", function () {
	let keyword = document.querySelector(`#keyword`);
	let tes = document.querySelector(`#tes`);

	// fetch data json
	fetch("../tes.json", {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
		.then(response => response.json())
		.then((data) => {
			// console.log(val)
			let hasil = ``;
			// membuat huruf awal kapital
			const val = keyword.value;
			function kapital(val) {
				return val.replace(/\w\S*/g, function (kata) {
					const kataBaru = kata.slice(0, 1).toUpperCase() + kata.substr(1);
					return kataBaru
				});
			}
			for (let i = 0; i < data.length; i++) {
				let nama = data[i][`nama`],
					npm = data[i][`npm`],
					prodi = data[i][`prodi`];
				semester = data[i][`semester`];
				notel = data[i][`notel`];
				tahunLahir = data[i][`tahunLahir`];
				instagram = data[i][`instagram`];
				ignama = data[i][`ignama`];

				if (kapital(val) === nama) {
					hasil += `<ul>
					<li class="mb-3"> Nama Lengkap :<br> ${nama}</li>
					<li class="mb-3"> Kelahiran Tahun :<br> ${tahunLahir}</li>
					<li class="mb-3"> Nomor Pokok Mahasiswa :<br> ${npm}</li>
					<li class="mb-3"> Program Studi :<br> ${prodi}</li>
					<li class="mb-3"> Semester :<br> ${semester}</li>
					<li class="mb-3"> Nomor Telepon :<br> ${notel}</li>				
					<li>Instagram :<br> <a href="${instagram}" class="italic">${ignama}</a></li>				
					</ul>`
				};
				if (kapital(val) === npm) {
					hasil += `<ul>
					<li class="mb-3"> Nama Lengkap :<br> ${nama}</li>
					<li class="mb-3"> Kelahiran Tahun :<br> ${tahunLahir}</li>
					<li class="mb-3"> Nomor Pokok Mahasiswa :<br> ${npm}</li>
					<li class="mb-3"> Program Studi :<br> ${prodi}</li>
					<li class="mb-3"> Semester :<br> ${semester}</li>
					<li class="mb-3"> Nomor Telepon :<br> ${notel}</li>				
					<li>Instagram :<br> <a href="${instagram}" class="italic">${ignama}</a></li>				
					</ul>`
				}

				tes.innerHTML = hasil;
			}
		})

})

