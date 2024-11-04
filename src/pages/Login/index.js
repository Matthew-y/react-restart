import { Button, Card, Form, Input, Checkbox } from 'antd'
import { useState } from 'react'
import logo from '@/logo.svg'

import './index.scss'

function Login() {
	const [form, setForm] = useState({
		username: '',
		password: '',
		checked: true,
	})

	const handleLogin = () => {
		console.log('loging in...')
		console.log(form)
	}

	const setFormVal = (key, value) => {
		setForm({ ...form, [key]: value })
	}

	const onFinish = (values) => {
		console.log('finish', values)
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<div className="login">
			<Card className="login-container">
				<img className="login-logo" src={logo} alt="" />
				<Form
					name="form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
          onFinishFailed={onFinishFailed}

					validateTrigger={['onBlur', 'onChange']}
				>
					<Form.Item
						name="username"
						valuePropName="username"
						rules={[
							{ required: true, message: '请输入用户名' },
						]}
					>
						<Input
							value={form.username}
							type="text"
							size="large"
							placeholder="请输入用户名"
							onChange={(e) => setFormVal('username', e.target.value)}
						/>
					</Form.Item>
					<Form.Item
						name="password"
						valuePropName="password"
						rules={[{ required: true, message: '请输入密码' }]}
					>
						<Input
							value={form.password}
							type="password"
							size="large"
							placeholder="请输入密码"
							onChange={(e) => setFormVal('password', e.target.value)}
						/>
					</Form.Item>
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox
							checked={form.checked}
							onChange={(e) => setFormVal('checked', e.target.checked)}
						>
							阅读并同意《用户协议条款》
						</Checkbox>
					</Form.Item>

					<Form.Item>
						<Button
							className="login-button"
							size="large"
							type="primary"
							onClick={handleLogin}
							htmlType="submit"
						>
							登录
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	)
}

export default Login
