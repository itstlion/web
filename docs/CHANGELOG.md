# It's T.Lion - Changelog

All notable changes to this project will be documented in this file.

## Types of changes

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

Visit _[Keep a Changelog][changelog]_ for more information.

## List of releases

- [Version 2.0.0](#v2.0.0) - 2021/08/08
- [Version 1.8.0](#v1.8.0) - 2021/07/27
- [Version 1.7.1](#v1.7.1) - 2021/07/23
- [Version 1.7.0](#v1.7.0) - 2021/07/22
- [Version 1.6.2](#v1.6.2) - 2021/07/18
- [Version 1.6.1](#v1.6.1) - 2021/07/18
- [Version 1.6.0](#v1.6.0) - 2021/07/17
- [Version 1.5.0](#v1.5.0) - 2021/07/05
- [Version 1.4.0](#v1.4.0) - 2021/06/25
- [Version 1.3.1](#v1.3.1) - 2021/06/08
- [Version 1.3.0](#v1.3.0) - 2021/06/08
- [Version 1.2.3](#v1.2.3) - 2021/06/05
- [Version 1.2.2](#v1.2.2) - 2021/05/18
- [Version 1.2.1](#v1.2.1) - 2021/05/13
- [Version 1.2.0](#v1.2.0) - 2021/05/13
- [Version 1.1.3](#v1.1.3) - 2021/05/10
- [Version 1.1.2](#v1.1.2) - 2021/05/07
- [Version 1.1.1](#v1.1.1) - 2021/05/06
- [Version 1.1.0](#v1.1.0) - 2021/05/05
- [Version 1.0.3](#v1.0.3) - 2021/05/04
- [Version 1.0.2](#v1.0.2) - 2021/05/03
- [Version 1.0.1](#v1.0.1) - 2021/05/03
- [Version 1.0.0](#v1.0.0) - 2021/05/03
- [Version 0.1.0](#v0.1.0) - 2021/01/13

## Next version

> Coming soon

## Version 2.0.0 <a name="v2.0.0"></a>

### Changed

- Move source code in the project's root folder
- Internal architecture

## Version 1.8.0 <a name="v1.8.0"></a>

### Changed

- Release's covers are now retrieved from API

## Version 1.7.1 <a name="v1.7.1"></a>

### Added

- Add release body template for GitHub repository

### Changed

- Resize all images to a maximum of **300px square**

## Version 1.7.0 <a name="v1.7.0"></a>

### Added

- Add dynamic anchor for releases (try `itstlion.com/releases#release-name`)

### Changed

- Update issue templates for GitHub repository

## Version 1.6.2 <a name="v1.6.2"></a>

### Fixed

- Application's version wasn't upgraded during last release

## Version 1.6.1 <a name="v1.6.1"></a>

### Added

- Cover artwork for **Sunny Window** release

### Fixed

- Core module for using API v4 instead of API v3

## Version 1.6.0 <a name="v1.6.0"></a>

### Added

- Add Docker Compose configuration for development environment

### Changed

- Refactor CI & CD
- Improved version number reaction in footer

## Version 1.5.0 <a name="v1.5.0"></a>

### Added

- Footer with version number of the application (secret)
- Transitions for improving User Experience (UX)

### Changed

- UI of loader and reload button
- Modernize releases UI
- Dark theme following _[Material Design principles][material-dark-theme]_

### Fixed

- Bottom sheet's bad display on small mobiles

## Version 1.4.0 <a name="v1.4.0"></a>

### Added

- _Stillness in Darkness_ release's artwork

## Version 1.3.1 <a name="v1.3.1"></a>

### Fixed

- Try to fix bad requests to API v3

## Version 1.3.0 <a name="v1.3.0"></a>

### Changed

- Simplify `README` documentation
- Migrate from API v2 to v3

## Version 1.2.3 <a name="v1.2.3"></a>

### Fixed

- Try to fix bad display on Apple devices by updating streaming links UI

## Version 1.2.2 <a name="v1.2.2"></a>

### Security

- Change API Url from HTTP to HTTPS in production

## Version 1.2.1 <a name="v1.2.1"></a>

### Fixed

- Fix blurry artworks of release by storing images internally

## Version 1.2.0 <a name="v1.2.0"></a>

### Changed

- Release's artwork retrieving from external link given by the API

## Version 1.1.3 <a name="v1.1.3"></a>

### Changed

- Update README documentation for public access

### Fixed

- Fix API url in production environment

## Version 1.1.2 <a name="v1.1.2"></a>

### Fixed

- Add **Morning Light** release's artwork added

## Version 1.1.1 <a name="v1.1.1"></a>

### Fixed

- Fix streaming links delayed display by fetching data on page loading

## Version 1.1.0 <a name="v1.1.0"></a>

### Added

- Progress spinner when loading data
- Error notification and reloading button when releases retrieving fails

### Changed

- Website logo

## Version 1.0.3 <a name="v1.0.3"></a>

### Fixed

- Fix streaming links delayed display
- Fix releases display on 1920x937px screens

## Version 1.0.2 <a name="v1.0.2"></a>

### Fixed

- Fix NGINX configuration for subpages reloading

## Version 1.0.1 <a name="v1.0.1"></a>

### Fixed

- Fix HTTPS/HTTP request mixing by updating services after API fixing

## Version 1.0.0 <a name="v1.0.0"></a>

### Added

- Release listing page

## Version 0.1.0 <a name="v0.1.0"></a>

### Added

- _Git_ workflow
- Pull request and issue templates for _Github_ repository
- Continuous Delivery (CD) scripts for staging and production environments with _Github Actions_

<!-- Links -->

[changelog]: https://keepachangelog.com/en/1.1.0/
[material-dark-theme]: https://material.io/design/color/dark-theme.html