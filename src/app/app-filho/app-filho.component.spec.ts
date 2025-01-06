import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilhoComponent } from './app-filho.component';

describe('AppFilhoComponent', () => {
  let component: AppFilhoComponent;
  let fixture: ComponentFixture<AppFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFilhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
