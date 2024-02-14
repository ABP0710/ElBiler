import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVsComponent } from './evs.component';

describe('EVsComponent', () => {
  let component: EVsComponent;
  let fixture: ComponentFixture<EVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EVsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
