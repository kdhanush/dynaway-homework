import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { HomePage } from './home.page'

describe('HomePage', () => {
  let component: HomePage
  let fixture: ComponentFixture<HomePage>

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create the home page", () => {
    expect(component).toBeTruthy();
  });

  it("should have a title", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("ion-title").textContent).toEqual(
      " Dynaway Homework "
    );
  });

  it("should have a grid ", () => {
    const compiled = fixture.nativeElement;
    const grid = compiled.querySelector("ion-grid.list");
    expect(grid).toBeTruthy();
  });

  it("should have app-asset-card", () => {
    const compiled = fixture.nativeElement;
    const assetCards = compiled.querySelectorAll("app-asset-card");
    expect(assetCards.length).toBeGreaterThanOrEqual(0);
  });
});
