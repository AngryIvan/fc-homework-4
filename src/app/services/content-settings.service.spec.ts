import { TestBed } from '@angular/core/testing';

import { ContentSettingsService } from './content-settings.service';

describe('ContentSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentSettingsService = TestBed.get(ContentSettingsService);
    expect(service).toBeTruthy();
  });
});
