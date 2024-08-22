// path: /types/form-user.ts
export type FormUserInput = {
    nama_lengkap: string;
    nama_panggilan: string;
    email: string;
    password: string;
    ulangi_password: string;
    jenis_kelamin: 'Laki-laki' | 'Perempuan' | '';
    no_handphone: string;
    tempat_lahir?: string;
    tanggal_lahir?: Date | null;
    negara_domisili: 'Indonesia' | 'Korea Utara' | '';
    provinsi_domisili: 'Jawa Barat' | '';
    kab_kota_domisili: 'Kota Bekasi' | '';
    alamat_domisili?: string;
    status_pekerjaan: 'PNS' | 'Non-PNS' | '';
    nama_perguruan_tinggi: 'AIS' | 'STIS' | 'POLSTAT STIS' | '';
    bulan_lulus?: Date | null;
    angkatan: string;
    program_studi: string;
    jenis_kantor: 'BPS' | 'Non-BPS' | '';
    nip:string;
    nama_kantor: string;
    nama_unit_kerja: string;
    provinsi_unit_kerja: 'Jawa Barat' | '';
    kab_kota_unit_kerja: 'Kota Bekasi' | '';
    mulai_bekerja?: Date | null;
    status_pekerjaan_terakhir: 'Aktif' | 'Tidak Aktif' | '';
    mulai_berhenti_bekerja?: Date | null;
    status_aktivasi_haisstis:'Sudah' | 'Belum'|'';
    id_alumni:string;
  };
  