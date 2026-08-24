"use client";

import { useEffect, useState } from "react";
import { Card, List, Statistic, Row, Col, Typography, Spin } from "antd";
import { useAuth } from "./AuthProvider";
import { fetchUserStats } from "@/lib/api";
import Link from "next/link";

export function ProfileClient() {
  const { user, loading } = useAuth();
  const [stats, setStats] = useState<{
    trials?: {
      problem_id: string;
      status: string;
      tried_count: number;
    }[];
  } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    fetchUserStats()
      .then(setStats)
      .catch((e) => setError(e instanceof Error ? e.message : "Erro"));
  }, [user]);

  if (loading) return <Spin />;
  if (!user) {
    return (
      <Typography.Paragraph>
        Faça login para ver seu progresso.
      </Typography.Paragraph>
    );
  }

  const trials = stats?.trials || [];
  const solved = trials.filter((t) => t.status === "solved").length;

  return (
    <div>
      <Typography.Title level={3}>Olá, {user.email}</Typography.Title>
      {error && <Typography.Text type="danger">{error}</Typography.Text>}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col>
          <Card>
            <Statistic title="Tentados" value={trials.length} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Statistic title="Resolvidos" value={solved} />
          </Card>
        </Col>
      </Row>
      <List
        header="Progresso por exercício"
        dataSource={trials}
        locale={{ emptyText: "Nenhum envio ainda." }}
        renderItem={(item) => (
          <List.Item>
            <Link href={`/exercises/${item.problem_id}`}>{item.problem_id}</Link>
            <span>
              {item.status} · {item.tried_count} tentativa(s)
            </span>
          </List.Item>
        )}
      />
    </div>
  );
}
