import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionCheckComponent } from './interaction-check.component';

describe('InteractionCheckComponent', () => {
  let component: InteractionCheckComponent;
  let fixture: ComponentFixture<InteractionCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractionCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
