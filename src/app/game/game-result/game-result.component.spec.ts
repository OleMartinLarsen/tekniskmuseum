import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HighScoreModule } from '../../highscore/highscore.module';
import { GameResultComponent } from './game-result.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameResultComponent', () => {
  let component: GameResultComponent;
  let fixture: ComponentFixture<GameResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameResultComponent],
      imports: [HttpClientTestingModule, HighScoreModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
