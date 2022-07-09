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
					tempatLahir = data[i][`tempatLahir`],
					tanggalLahir = data[i][`tanggalLahir`];
				email = data[i][`email`];
				pendidikan = data[i][`pendidikan`];

				if (kapital(val) === nama) {
					hasil += `<ul>
					<li> Nama Lengkap : ${nama}</li>
					<li> Tempat, Tanggal Lahir : ${tempatLahir}, ${tanggalLahir}</li>
					<li> Email : ${email}</li>
					<li> Pendidikan Terakhir : ${pendidikan}</li>
					<br>
					</ul>`
				}
				// console.log(hasil);
				tes.innerHTML = hasil;
				console.log(hasil);
			}
		})
})
