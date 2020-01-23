package io.github.dunwu.javaweb;

import org.junit.Test;

import java.util.*;

/**
 * 负载均衡测试
 *
 * @author <a href="mailto:forbreak@163.com">Zhang Peng</a>
 * @since 2020-01-20
 */
public class LoadBalanceTests {

    private List<Node> initSample() {
        Random random = new Random();
        List<Node> nodes = new ArrayList<>();
        for (int i = 1; i <= 100; i++) {
            Node node = new Node("192.168.0." + i, random.nextInt(10));
            nodes.add(node);
        }
        return nodes;
    }

    /**
     * 统计负载均衡命中次数，样本数为 100000 次访问
     */
    private Map<Node, Long> countLoadBalance(LoadBalance<Node> algorithm) {
        Map<Node, Long> staticMap = new TreeMap<>();

        for (int i = 0; i < 100000; i++) {
            Node node = algorithm.next();
            if (staticMap.containsKey(node)) {
                Long value = staticMap.get(node);
                staticMap.put(node, ++value);
            } else {
                staticMap.put(node, 1L);
            }
        }
        staticMap.forEach((key, value) -> {
            System.out.printf("key = %s, value = %s\n", key, value);
        });

        System.out.println("方差：" + StatisticsUtil.variance(staticMap.values().toArray(new Long[0])));
        System.out.println("标准差：" + StatisticsUtil.standardDeviation(staticMap.values().toArray(new Long[] {})));
        return staticMap;
    }

    @Test
    public void randomLoadBalanceTest() {
        LoadBalance<Node> loadBalance = new RandomLoadBalance<>();
        loadBalance.buildInList(initSample());
        System.out.println("======================= 随机负载均衡 =======================");
        countLoadBalance(loadBalance);
    }

    @Test
    public void randomWeightLoadBalanceTest() {
        LoadBalance<Node> loadBalance = new RandomLoadBalance<>(true);
        loadBalance.buildInList(initSample());
        System.out.println("======================= 加权随机负载均衡 =======================");
        countLoadBalance(loadBalance);
    }

    @Test
    public void roundRobinLoadBalanceTest() {
        LoadBalance<Node> loadBalance = new RoundRobinLoadBalance<>();
        loadBalance.buildInList(initSample());
        System.out.println("======================= 轮询负载均衡 =======================");
        countLoadBalance(loadBalance);
    }

    @Test
    public void roundRobinWeightLoadBalanceTest() {
        LoadBalance<Node> loadBalance = new RoundRobinLoadBalance<>(true);
        loadBalance.buildInList(initSample());
        System.out.println("======================= 加权轮询负载均衡 =======================");
        countLoadBalance(loadBalance);
    }

    @Test
    public void consistentHashLoadBalanceTest() {
        LoadBalance<Node> loadBalance = new ConsistentHashLoadBalance<>();
        loadBalance.buildInList(initSample());
        System.out.println("======================= 一致性 Hash 负载均衡 =======================");
        countLoadBalance(loadBalance);
    }

    /**
     * 测试节点新增删除后的变化程度
     */
    @Test
    public void testNodeAddAndRemove() {
        // 构造 10000 随机请求
        List<String> keys = new ArrayList<>();
        for (int i = 0; i < 10000; i++) {
            keys.add(UUID.randomUUID().toString());
        }

        List<Node> nodes = new ArrayList<>();
        for (int i = 1; i <= 100; i++) {
            Node node = new Node("192.168.0." + i);
            nodes.add(node);
        }

        List<Node> newNodes = nodes.subList(0, 80);
        ConsistentHashLoadBalance<Node> oldLoadBalance = new ConsistentHashLoadBalance<>();
        oldLoadBalance.buildInList(nodes);
        ConsistentHashLoadBalance<Node> newLoadBalance = new ConsistentHashLoadBalance<>();
        newLoadBalance.buildInList(newNodes);

        int count = 0;
        for (String key : keys) {
            Node oldNode = oldLoadBalance.next(key);
            Node newNode = newLoadBalance.next(key);
            if (oldNode.equals(newNode)) count++;
        }
        System.out.println(count / 10000D);
    }

}
