import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
registerLocaleData(localeId, 'id-ID');


declare const $: any;

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [CommonModule, Header, Sidebar, Footer],
  templateUrl: './crypto.html',
  styleUrl: './crypto.css'
})
export class Crypto implements AfterViewInit {
  dataCrypto: any[] = [];
  isLoading: boolean = true;

  constructor(private renderer: Renderer2, private httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");
    this.renderer.addClass(document.body, "sidebar-collapsed");

    this.getTop10CoinPaprika();
  }

  getTop10CoinPaprika(): void {
    this.isLoading = true;
    
    // URL API CoinPaprika
    const url = "https://api.coinpaprika.com/v1/tickers?quotes=IDR";

    this.httpClient.get<any[]>(url).subscribe({
      next: (data) => {
        // Ambil 2000 data teratas
        this.dataCrypto = data.slice(0, 2000);
        this.isLoading = false;

        // Init DataTables setelah Angular selesai render
        setTimeout(() => {
          this.initDataTable();
        }, 500);
      },
      error: (err) => {
        console.error("Error:", err);
        this.isLoading = false;
        alert("Gagal koneksi ke server Crypto.");
      }
    });
  }

  initDataTable(): void {
    if (typeof $ !== 'undefined' && $.fn.DataTable) {

      if ($.fn.DataTable.isDataTable('#table1')) {
        $('#table1').DataTable().destroy();
      }

  
      $('#table1').DataTable({
        "paging": true,         
        "lengthChange": true,   
        "searching": true,      
        "ordering": true,       
        "info": true,          
        "autoWidth": false,
        "responsive": true,
        "pageLength": 10,       
        
        
        "language": {
            "search": "Cari Aset:",
            "lengthMenu": "Tampilkan _MENU_ koin",
            "zeroRecords": "Koin tidak ditemukan",
            "info": "Halaman _PAGE_ dari _PAGES_",
            "infoEmpty": "Tidak ada data",
            "infoFiltered": "(difilter dari _MAX_ total koin)",
            "paginate": {
                "first": "Awal",
                "last": "Akhir",
                "next": "Lanjut",
                "previous": "Mundur"
            }
        }
      });
    }
  }

formatRupiah(angka: number): string {
    if (angka === 0) return 'Rp 0';
    if (angka < 1) {
      return formatCurrency(angka, 'id-ID', 'Rp ', 'IDR', '1.2-8');
    }
    else if (angka < 1000) {
      return formatCurrency(angka, 'id-ID', 'Rp ', 'IDR', '1.2-2');
    }
    else {
      return formatCurrency(angka, 'id-ID', 'Rp ', 'IDR', '1.0-0'); 
    }
  }

  getColorClass(change: number): string {
    if (change > 0) return 'badge badge-success';
    if (change < 0) return 'badge badge-danger';
    return 'badge badge-secondary';
  }

}

