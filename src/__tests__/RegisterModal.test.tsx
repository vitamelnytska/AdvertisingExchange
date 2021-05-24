import { render } from '@testing-library/react';
import * as React from 'react';
  import { shallow } from 'enzyme';
import { RegisterModal, RegisterFormProps } from '../pages/SignIn/components/RegisterModal';
import { LoadingStatus } from '../store/types';
import { useSelector } from 'react-redux';
import { selectUserStatus } from '../store/ducks/user/selectors';

const mockRegister = jest.fn((fullname, email, username, password, password2) => {
    return Promise.resolve({ fullname, email, username, password, password2 });
  });
  