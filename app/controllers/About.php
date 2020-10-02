<?php
class About extends Controller{
    public function index($nama = 'nama', $pekerjaan = 'pekerjaan', $umur = 0){
    	$data['judul'] = 'About - index';
    	$data['nama'] = $nama;
    	$data['pekerjaan'] = $pekerjaan;
    	$data['umur'] = $umur; 

    	$this->view('templates/header',$data);
        $this->view('about/index',$data);
        $this->view('templates/footer');
    }
    public function page(){
    	$data['judul'] = "About - Page";
    	$this->view('templates/header',$data);
        $this->view('about/page');
        $this->view('templates/footer');
    }
}