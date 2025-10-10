import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncarPipe } from './truncar-pipe';

describe('TruncarPipe', () => {
  let component: TruncarPipe;
  let fixture: ComponentFixture<TruncarPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruncarPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruncarPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
