import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedFavoritesPage } from './saved-favorites.page';

describe('SavedFavoritesPage', () => {
  let component: SavedFavoritesPage;
  let fixture: ComponentFixture<SavedFavoritesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SavedFavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
