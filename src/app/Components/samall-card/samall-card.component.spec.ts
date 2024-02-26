import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamallCardComponent } from './samall-card.component';

describe('SamallCardComponent', () => {
  let component: SamallCardComponent;
  let fixture: ComponentFixture<SamallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamallCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SamallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
