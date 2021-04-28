import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridNewComponent } from './ag-grid-new.component';

describe('AgGridNewComponent', () => {
  let component: AgGridNewComponent;
  let fixture: ComponentFixture<AgGridNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
