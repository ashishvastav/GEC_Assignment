import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnidaComponent } from './onida.component';

describe('OnidaComponent', () => {
  let component: OnidaComponent;
  let fixture: ComponentFixture<OnidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
