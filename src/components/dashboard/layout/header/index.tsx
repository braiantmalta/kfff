import { useRouter } from 'next/router';

import { BlackButton } from '@components/common/buttons';
import { Container } from '@components/common/container';
import { Logo } from '@components/common/logo';
import {
  HeaderContent,
  ItemList,
  Item,
  LogoBox,
  ItemBox,
  NavbarContent,
} from './styles';
import { BlackLink } from '../blackLink';

type HeaderProps = {
  items: {
    id: number;
    title: string;
    route: string;
  }[];
};

export const Header = ({ items }: HeaderProps) => {
  const router = useRouter();
  return (
    <>
      <HeaderContent>
        <Container>
          <NavbarContent>
            <LogoBox>
              <Logo url="/img/png/logo.png" onClick={() => router.push('/')} />
            </LogoBox>
            <ItemBox>
              <ItemList>
                {items.map((item, index) => (
                  <Item key={index}>
                    <BlackLink key={index} link={item.route}>
                      {item.title}
                    </BlackLink>
                  </Item>
                ))}
                <BlackButton /* onClick={() => {}} */>REGISTRE-SE</BlackButton>
              </ItemList>
            </ItemBox>
          </NavbarContent>
        </Container>
      </HeaderContent>
    </>
  );
};
