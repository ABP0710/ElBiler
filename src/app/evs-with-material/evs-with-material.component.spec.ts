import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvsWithMaterialComponent } from './evs-with-material.component';

describe('EvsWithMaterialComponent', () => {
  let component: EvsWithMaterialComponent;
  let fixture: ComponentFixture<EvsWithMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvsWithMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvsWithMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
