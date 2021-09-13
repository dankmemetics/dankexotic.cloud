import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { ProfileTitle } from '../components/profile/profile.title';
import { ProfileSearch } from '../components/profile/profile.search';

export function Profile() {
  return (
    <>
      <Header tab="profile"/>
      <PageContainer>
        <ProfileTitle />
        <ProfileSearch />
      </PageContainer>
    </>
  )
}

export default Profile;