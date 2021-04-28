import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-ag-grid-new',
  templateUrl: './ag-grid-new.component.html',
  styleUrls: ['./ag-grid-new.component.css']
})
export class AgGridNewComponent {

  @Input() ColumnDefs: any;  
  @Input() RowData: any;  
  @Input() IsColumnsToFit: boolean | undefined;  
  
  gridApi: any;  
  gridColumnApi: any;  
  
  BindData(params:any) {  
    this.gridApi = params.api;  
    this.gridColumnApi = params.columnApi;  
    params.api.setRowData(this.RowData);  
    if (this.IsColumnsToFit) {  
      this.gridApi.sizeColumnsToFit();  
    }  
  }  
}  