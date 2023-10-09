import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseRestaurantsPage } from './browse-restaurants.page';

describe('BrowseRestaurantsPage', () => {
  let component: BrowseRestaurantsPage;
  let fixture: ComponentFixture<BrowseRestaurantsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrowseRestaurantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
