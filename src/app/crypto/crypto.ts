import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, formatCurrency, registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import localeId from '@angular/common/locales/id';

// Components UI
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

// Registrasi Locale Indonesia
registerLocaleData(localeId, 'id-ID');

// Deklarasi jQuery
declare const $: any;

// --- INTERFACE (Agar Tipe Data Jelas & Maintainable) ---
interface CoinQuotes {
  IDR: {
    price: number;
    market_cap: number;
    percent_change_24h: number;
  };
}

interface Coin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  quotes: CoinQuotes;
}

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [CommonModule, Header, Sidebar, Footer],
  templateUrl: './crypto.html'
})
export class Crypto implements OnInit, AfterViewInit {
  
  // State Data
  dataCrypto: Coin[] = []; // Menggunakan tipe data Coin (bukan any)
  isLoading: boolean = true;

  constructor(
    private http: HttpClient, 
    private renderer: Renderer2 // Wajib inject ini untuk manipulasi DOM/Sidebar
  ) {}

  // 1. Lifecycle: Dipanggil saat komponen logic dimulai
  ngOnInit(): void {
    this.fetchData();
  }

  // 2. Lifecycle: Dipanggil setelah tampilan HTML selesai dimuat
  ngAfterViewInit(): void {
    // --- SIDEBAR LOGIC (Sesuai Permintaan) ---
    // Memaksa sidebar tertutup saat halaman ini dibuka
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");
    this.renderer.addClass(document.body, "sidebar-collapsed");
  }

  // --- LOGIC: FETCH DATA ---
  fetchData(): void {
    const apiUrl = "https://api.coinpaprika.com/v1/tickers?quotes=IDR";

    this.http.get<Coin[]>(apiUrl).subscribe({
      next: (data) => {
        // Ambil 2000 data
        let cleanData = data.slice(0, 2000);

        // Sorting: Market Cap Terbesar -> Terkecil
        cleanData.sort((a, b) => b.quotes.IDR.market_cap - a.quotes.IDR.market_cap);

        this.dataCrypto = cleanData;
        this.isLoading = false;
        
        // Init DataTables
        // Kita beri jeda sedikit agar Angular selesai merender baris <tr>
        // 500ms sudah cukup aman (2000ms terlalu lama menunggu)
        setTimeout(() => this.initTable(), 500);
      },
      error: (err) => {
        console.error("API Error:", err);
        this.isLoading = false;
        alert("Gagal memuat data pasar. Cek koneksi internet.");
      }
    });
  }

  // --- LOGIC: FORMATTING & UI HELPER ---

  formatUang(nilai: number): string {
    if (!nilai) return 'Rp 0';
    // Logic desimal pintar: Koin micin desimal panjang, koin mahal desimal pendek
    const digit = nilai < 1000 ? '1.2-8' : '1.0-2';
    return formatCurrency(nilai, 'id-ID', 'Rp ', 'IDR', digit);
  }

  getColorClass(value: number): string {
    return value >= 0 ? 'text-success' : 'text-danger';
  }

  // --- LOGIC: DATATABLES ---
  initTable(): void {
    if (typeof $ === 'undefined' || !$.fn.DataTable) return;

    // Hancurkan instance lama untuk mencegah error/duplikasi
    if ($.fn.DataTable.isDataTable('#tableCrypto')) {
      $('#tableCrypto').DataTable().destroy();
    }

    $('#tableCrypto').DataTable({ 
      responsive: true, 
      pageLength: 10,
      ordering: true,
      autoWidth: false,
      language: {
          search: "Cari Aset:",
          zeroRecords: "Data tidak ditemukan",
          paginate: {
              next: '<i class="fas fa-chevron-right"></i>',
              previous: '<i class="fas fa-chevron-left"></i>'
          }
      }
    });
  }
}