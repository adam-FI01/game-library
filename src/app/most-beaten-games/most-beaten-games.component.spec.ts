import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostBeatenGamesComponent } from './most-beaten-games.component';

describe('MostBeatenGamesComponent', () => {
  let component: MostBeatenGamesComponent;
  let fixture: ComponentFixture<MostBeatenGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostBeatenGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostBeatenGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
