import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbCollectionOfInvoiceComponent } from './sb-collection-of-invoice.component';

describe('SbCollectionOfInvoiceComponent', () => {
  let component: SbCollectionOfInvoiceComponent;
  let fixture: ComponentFixture<SbCollectionOfInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbCollectionOfInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbCollectionOfInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
