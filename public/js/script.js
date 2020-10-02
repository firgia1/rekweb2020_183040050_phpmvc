$(function(){
	$('.tombolTambahData').on('click',function(){
		$('#judulModal').html('Tambah Data Mahasiswa');
		$('.modal-footer button[type=submit]').html('tambah data');
		
	});

	$('.tampilModalUbah').on('click',function(){
		$('#judulModal').html('Ubah Data Mahasiswa');
		$('.modal-footer button[type=submit]').html('ubah data');
		$('.modal-body form').attr('action', 'http://localhost/rekayasa web/phpmvc/public/mahasiswa/ubah');
		const id = $(this).data('id');
		

		
		$.ajax({
			url: 'http://localhost/rekayasa web/phpmvc/public/mahasiswa/getUbah',
			data: {id : id},
			method: 'post',
			dataType: 'json',
			success: function(data){
				$('#nama').val(data.nama);
				$('#nrp').val(data.nrp);
				$('#email').val(data.email);
				$('#jurusan').val(data.jurusan);
				$('#id').val(data.id);
				console.log(data);
			},
		});
	});
});